'use strict'

var User = require("./app/models/User");
var crypto = require("./app/utils/crypto");
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt");
var base64URL = require("base64-url");
var validate = require("./app/utils/validate");

function findCurrentUser(sessionToken){
  return new Promise(function(resolve, reject){
    User.findOne({ sessionToken: sessionToken }).exec(function(err, user){
      if(user){
        console.log(user);
        resolve(user);
      }else{
        reject(err);
      }
    });
  });
}

function writeResponse(res, data){
  res.status(data.status).send(JSON.stringify(data));
}

var addRoutes = function(app){
  app.get("/", function(req, res){
    res.render("index");
  })

  app.get("/", function(req, res){
    var sessionToken = req.cookies["-session"];
    if(!sessionToken){
      serverLog.log("no session token detected");
      serverLog.logProcessTime();
      res.render("index.ejs", { username: false });
      return 1;
    }

    User.findOne({ sessionToken: sessionToken }).then(function(currentUser){
      if(currentUser){
        serverLog.log("logged in user detected");
        serverLog.logProcessTime();
        res.render("index.ejs", { username: currentUser.username, userId: currentUser._id, userSessionToken: currentUser.sessionToken });
      }else{
        serverLog.log("no user with session token detected");
        serverLog.logProcessTime();
        res.render("index.ejs", { username: false });
      }
    }, function(err){
      serverLog.log("error occured");
      serverLog.logProcessTime();
      writeResponse(res, { status: 500, error: err });
    });
  });

  // User resources

  // User creation route
  app.post("/api/users/new", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming user creation request");

    // Data retrieval and creation
    var username = req.body.username;
    var password = req.body.password;
    var sessionToken = base64URL.encode(crypto.generateToken());

    // Validate data
    if(!Validate.username(username).success){
      serverLog.log("username validation failed");
      serverLog.logProcessTime();
      writeResponse(res, {status: 422, error: "username validation failed", errors: ["Make sure username is not more than 25 characters."]});
      return 1;
    }

    if(!Validate.password(password).success){
      serverLog.log("password validation failed");
      serverLog.logProcessTime();
      writeResponse(res, {status: 422, error: "password validation failed", errors: ["Make sure password is at least 6 characters long."]});
      return 1;
    }

    // Generate password_digest
    var salt = bcrypt.genSaltSync(10);
    var password_digest = bcrypt.hashSync(password, salt);

    User.create({
      username: username,
      password_digest: password_digest,
      sessionToken: sessionToken
    }, function(err, model){
      if(err){
        serverLog.log("error occured");
        serverLog.logProcessTime();
        writeResponse(res, {status: 422, error: "creation error", errors: err});
      }else{
        serverLog.log("user creation successful");
        res.cookie("boxxpool-session", sessionToken, { maxAge: 900000, httpOnly: true });
        serverLog.logProcessTime();
        writeResponse(res, {status: 200, success: "creation success", user: model});
      };
    });
  });

  // User get inbox content utilities
  app.get("/api/users/load/:sessionToken", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming user information fetch request");

    var sessionToken = req.url.split("/").pop();
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " found");
      var results = {};
      results.user = currentUser;

      new Promise(function(resolve, reject){
        Feed.find({ username: currentUser.username }).exec(function(err, feeds){
          serverLog.log("feeds assembled");
          results.feeds = {};
          results.inboxx = {};
          var count = feeds.length;

          if(count === 0){
            resolve(results);
            return 0;
          }

          feeds.forEach(function(feed){
            results.feeds[feed.docId] = feed;
            Message.findOne({ docId: feed.docId }).exec(function(err, message){
              serverLog.log("added message " + feed.docId + " according to feed. Count: " + count);
              if(message){
                results.inboxx[message.docId] = message;
              }
              count -= 1;

              if(count === 0){
                resolve(results);
                serverLog.log("resolved all feeds associations");
              }
            });
          });
        });
      }).then(function(results){
        Draft.find({ username: results.user.username }).exec(function(err, drafts){
          results.drafts = {};
          drafts.forEach(function(draft){
            results.drafts[draft.docId] = draft;
          });
          serverLog.log("drafts assembled");

          Message.find({ username: results.user.username }).exec(function(err, messages){
            results.sent = {};
            messages.forEach(function(message){
              results.sent[message.docId] = message;
            });
            serverLog.log("sent mails assembled");

            serverLog.logProcessTime();
            writeResponse(res, { status: 200, success: "fetch successful", results: results });
          });
        });
      });
    });
  });

  // Random message fetching utilities
  app.get("/api/messages/fetch/:sessionToken", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming random fetch request")

    var sessionToken = req.url.split("/").pop();
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " found");

      var results = [];
      Message.count().exec(function(err, count){
        var random;

        for(var i = 0; i < 5; i++){
          random = Math.floor(Math.random() * count);
          Message.findOne().skip(random).exec(function(err, message){
            results.push(message);

            if(results.length >= 5){
              serverLog.log("message assembly complete");
              serverLog.logProcessTime();
              writeResponse(res, { status: 200, success: "fetch successful", messages: results });
              var processEndTime = Date.now();
            }
          });
        }
      });
    }, function(err){
      serverLog.log("no logged in user found");
      serverLog.logProcessTime();
      writeResponse(res, { status: 404, error: err });
    });
  });

  // Session resources
  // Session creation route
  app.post("/api/session/new", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming session creation request");

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ username: username }, "_id username password_digest sessionToken", function(err, user){
      if(err){ console.log(err); }
      if(!user){
        serverLog.log("user with username not found");
        serverLog.logProcessTime();
        writeResponse(res, { status: 404, error: "user not found", errors: ["Username does not exist."] });
        return 1;
      }

      if(bcrypt.compareSync(password, user.password_digest)){
        serverLog.log("user verrification passed");
        var newSessionToken = base64URL.encode(crypto.generateToken());
        user.sessionToken = newSessionToken;
        user.save();
        res.cookie("boxxpool-session", newSessionToken);
        serverLog.logProcessTime();
        writeResponse(res, { status: 200, success: "verification success", user: user });
      }else{
        serverLog.log("user validation failed");
        serverLog.logProcessTime();
        writeResponse(res, { status: 403, error: "verification failed", errors: ["The password was not correct."] });
      }
    });
  });

  // Session destruction route
  app.delete("/api/session/delete", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming session deletion request");

    var sessionToken = req.cookies["boxxpool-session"];
    if(sessionToken){
      serverLog.log("session token detected");
      User.findOne({ sessionToken: sessionToken }, "_id username password_digest sessionToken", function(err, user){
        if(user){
          serverLog.log("user with session token " + sessionToken + " detected");
          var newSessionToken = base64URL.encode(crypto.generateToken());
          user.sessionToken = newSessionToken;
          user.save();
          res.cookie("boxxpool-session", null);
          serverLog.logProcessTime();
          writeResponse(res, {status: 200, success: "session deleted" });
        }else{
          serverLog.log("no user with session token " + sessionToken + " detected");
          serverLog.logProcessTime();
          writeResponse(res, {status: 200, success: "session deleted" });
        }
      });
    }else{
      serverLog.log("session not detected");
      serverLog.logProcessTime();
      writeResponse(res, {status: 200, success: "session not detected" });
    }
  });

  // Message resources
  app.get("/message/:docId", function(req, res){
    // RAZYNOIR-INCOMPLETE
  });

  // Draft Utilities
  // Draft save route
  app.post("/api/drafts/save", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming draft save request");

    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " detected");

      var docId = req.body.docId;
      var draftTitle = req.body.title;
      var newContent = req.body.content;
      var username = currentUser.username;

      Draft.findOne({ docId: docId }).exec(function(err, draft){
        if(!draft){
          serverLog.log("draft with id " + docId + " does not exist");
          serverLog.log("create a new draft");

          Draft.create({
            title: draftTitle,
            content: newContent,
            username: currentUser.username,
            docId: docId
          }, function(err, draft){
            if(err){
              serverLog.log("error occured");
              serverLog.logProcessTime();
              writeResponse(res, { status: 500, error: "error occurred" });
            }else{
              serverLog.log("new draft saved");
              serverLog.logProcessTime();
              writeResponse(res, { status: 200, success: "new draft saved", draft: draft });
            }
          });
        }else{
          serverLog.log("exising draft found");
          if(draft.username == currentUser.username){
            draft.title = draftTitle;
            draft.content = newContent;
            draft.save(function(){
              serverLog.log("draft saved");
              serverLog.logProcessTime();
              writeResponse(res, { status: 200, success: "draft saved", draft: draft });
            });
          }else{
            serverLog.log("permission denied");
            serverLog.logProcessTime();
            writeResponse(res, { status: 403, error: "permission denied" });
          }
        }
      });
    }, function(err){
      serverLog("user session not found");
      serverLog.logProcessTime();
      writeResponse(res, { status: 404, error: "no logged in user detected" });
    });
  });

  // Draft post route
  app.post("/api/drafts/publish", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming draft publishing request");

    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " found");

      var docId = req.body.docId;
      Draft.findOne({ docId: docId }).exec(function(err, draft){
        if(!draft){
          serverLog.log("no draft found or draft hasn't been saved yet");
          serverLog.logProcessTime();
          writeResponse(res, { status: 404, error: err });
          return 1;
        }
        if(draft.username == currentUser.username){
          serverLog.log("publishing permission granted");

          Message.create({
            title: draft.title,
            content: draft.content,
            username: draft.username,
            docId: draft.docId,
            cheatCode: crypto.generateCheatCode(),
            keyWords: sequenceKeywords(draft.content),
            votes: {
              awsome: { "i8$8@kl*loid": true },
              suck: { "i8$8@kl*loid": true },
              spam: { "i8$8@kl*loid": true },
              nsfw: { "i8$8@kl*loid": true },
              enlighten: { "i8$8@kl*loid": true }
            },
            voteStore: { "i8$8@kl*loid": "awsome" }
          }, function(err, message){
            if(err){
              serverLog.log("error occured");
              serverLog.logProcessTime();
              writeResponse(res, { status: 500, error: err });
            }else{
              serverLog.log("new message created");
              // draft.remove();
              serverLog.logProcessTime();
              writeResponse(res, { status: 200, success: "draft published", message: message });
            }
          });
        }else{
          serverLog.log("permission denied");
          serverLog.logProcessTime();
          writeResponse(res, { status: 403, error: "permission denied" });
        }
      });
    }, function(err){
      serverLog.log("no logged in user detected");
      serverLog.logProcessTime();
      writeResponse(res, { status: 404, error: err });
    });
  });

  // Draft delete route
  app.delete("/api/drafts/destroy", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming draft destroy request");

    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){

      var docId = req.body.docId;
      Draft.findOne({ docId: docId }).exec(function(err, draft){
        if(!draft){
          serverLog.log("no draft found");
          serverLog.logProcessTime();
          writeResponse(res, { status: 404, error: "draft not found" });
        }else{
          serverLog.log("draft found");
        }

        if(draft.username == currentUser.username){
          serverLog.log("destruction granted");
          draft.remove();
          serverLog.logProcessTime();
          writeResponse(res, { status: 200, success: "draft removed" });
        }else{
          serverLog.log("permission denied");
          serverLog.logProcessTime();
          writeResponse(res, { status: 403, error: "permission denied" });
        }
      });
    }, function(err){
      serverLog.logProcessTime();
      writeResponse(res, { status: 403, error: "no logged in user detected" });
    });
  });

  // Voting Utilities
  // Vote route
  app.post("/api/messages/vote", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming vote request");

    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " detected.");
      var docId = req.body.docId;
      var voteType = req.body.voteType;

      Message.findOne({ docId: docId }, "", function(err, message){
        if(!message){
          serverLog.log("message not found");
          serverLog.logProcessTime();
          writeResponse(res, { status: 404, error: "message not found" });
          return 1;
        }

        serverLog.log("message found");
        var username= currentUser.username;
        var voteStore = message.voteStore;
        var votes = message.votes;

        if(voteStore[username]){
          serverLog.log("existing vote detected");
          var oldType = voteStore[username];
          delete votes[oldType][username];
        }

        voteStore[username] = voteType;
        votes[voteType][username] = true;

        serverLog.log("voting information update");
        message.voteStore = voteStore;
        message.votes = votes;

        message.markModified("votes");
        message.markModified("voteStore");
        message.save();

        serverLog.log("voting completed");
        serverLog.logProcessTime();
        writeResponse(res, { status: 200, success: "vote saved" });
      });
    }, function(err){
      serverLog.log("no logged in user detected");
      serverLog.logProcessTime();
      writeResponse(res, { status: 404, error: "user not found" });
    });
  });

  // Feed management routes
  app.post("/api/feeds/create_multiple", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming create multiple feed associations request");

    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " detected");

      var newMessages = req.body.messages;
      var user = currentUser;
      newMessages.forEach(function(newMessage){
        Feed.create({
          username: user.username,
          userId: user._id,
          messageId: newMessage._id,
          title: newMessage.title,
          docId: newMessage.docId,
          status: "unread",
          modifiers: "",
          origin: ""
        });
      });

      serverLog.log("all feed creation scheduled");
      serverLog.logProcessTime();
      writeResponse(res, { status: 200, success: "feeds creation scheduled", messages: newMessages });
    }, function(err){
      serverLog.log("error occured");
      console.log(err);
      serverLog.logProcessTime();
      writeResponse(res, { status: 500, error: err });
    });
  });

  app.post("/api/feeds/change_to_read", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming feed change to read request");

    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " detected");

      var docId = req.body.message.docId;
      Feed.findOne({ docId: docId, username: currentUser.username }).exec(function(err, feed){
        if(!feed){
          serverLog.log("feed not found");
        }else{
          serverLog.log("feed found");
          feed.status = "read";
          feed.save();
          serverLog.logProcessTime();
          writeResponse(res, { status: 200, success: "feed update scheduled", feed: feed });
        }
      });
    }, function(err){
      serverLog.log("error occured");
      serverLog.logProcessTime();
      writeResponse(res, { status: 500, error: err });
    });
  });

  app.delete("/api/feeds/destroy", function(req, res){
    var serverLog = new ServerLog();
    serverLog.log("incoming delete feed association request");

    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){
      serverLog.log("user with session token " + sessionToken + " detected");

      var docId = req.body.message.docId;
      Feed.findOne({ docId: docId, username: currentUser.username }).exec(function(err, feed){
        if(!feed){
          serverLog.log("no feed found");
          serverLog.logProcessTime();
          writeResponse(res, { status: 404, error: "feed not found" });
        }else{
          serverLog.log("feed found for removal");
          serverLog.logProcessTime();
          feed.remove();
          writeResponse(res, { status: 200, error: "feed destruction scheduled" });
        }
      });
    }, function(err){
      serverLog.log("error occured");
      serverLog.logProcessTime();
      writeResponse(res, { status: 500, error: err });
    });
  });
}

module.exports = addRoutes;
