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
    if(!req.cookies){
      res.render("login", { messages: ["No sessions detected"] });
      return 1;
    }
    var sessionToken = req.cookies["lanyardblue-session"];
    if(!sessionToken){
      res.render("login", { messages: ["Please log in to view contents."] });
      return 1;
    }
    User.findOne({ sessionToken: sessionToken }, 'username email sessionToken data', function(err, currentUser){
      if(currentUser){
        res.render("index", { username: currentUser.username, userId: currentUser._id, userSessionToken: currentUser.sessionToken });
      }else{
        res.render("login", { username: undefined });
      }
    })
  });

  app.post("/api/users/new", function(req, res){
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var sessionToken = base64URL.encode(crypto.generateToken());

    if(!validate.username(username).success){
      writeResponse(res, {status: 422, error: "username validation failed", errors: ["Make sure username is not more than 25 characters."]});
      return 1;
    }
    if(!validate.password(password).success){
      writeResponse(res, {status: 422, error: "password validation failed", errors: ["Make sure password is at least 6 characters long."]});
      return 1;
    }
    var salt = bcrypt.genSaltSync(10);
    var password_digest = bcrypt.hashSync(password, salt);
    User.create({
      username: username,
      email: email,
      password_digest: password_digest,
      sessionToken: sessionToken
    }, function(err, model){
      if(err){
        writeResponse(res, {status: 422, error: "creation error", errors: err});
      }else{
        res.cookie("lanyardblue-session", sessionToken, { maxAge: 900000, httpOnly: true });
        writeResponse(res, {status: 200, success: "creation success", user: model});
      };
    });
  });

  app.get("/api/users/load/:sessionToken", function(req, res){
    var sessionToken = req.url.split("/").pop();
    findCurrentUser(sessionToken).then(function(currentUser){
      if(!currentUser){
        writeResponse(res, { status: 404, error: "user not found" });
      }else{
        var result = currentUser;
        writeResponse(res, { status: 200, success: "fetch successful", result: result });
      }
    });
  });

  app.post("/api/session/new", function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email: email }, "_id username password_digest sessionToken data", function(err, user){
      if(err){
        writeReponse(res, { status: 500, error: "database error", errors: [err] });
      }
      if(!user){
        writeResponse(res, { status: 404, error: "user not found", errors: ["username does not exist."] });
        return 1;
      }

      if(bcrypt.compareSync(password, user.password_digest)){
        var newSessionToken = base64URL.encode(crypto.generateToken());
        user.sessionToken = newSessionToken;
        user.save();
        res.cookie("lanyardblue-session", newSessionToken);
        writeResponse(res, { status: 200, success: "verification success", user: user });
      }else{
        writeResponse(res, { status: 403, error: "verification failed", errors: ["the password was not correct."] });
      }
    });
  });

  app.delete("/api/session/delete", function(req, res){
    var sessionToken = req.cookies["lanyardblue-session"];
    if(sessionToken){
      User.findOne({ sessionToken: sessionToken }, "_id username password_digest sessionToken", function(err, user){
        if(user){
          var newSessionToken = base64URL.encode(crypto.generateToken());
          user.sessionToken = newSessionToken;
          user.save();
          res.cookie("lanyardblue-session", null);
          writeResponse(res, {status: 200, success: "session deleted" });
        }else{
          writeResponse(res, {status: 404, error: "no user with session token detected" });
        }
      });
    }else{
      writeResponse(res, {status: 404, success: "session not detected" });
    }
  });

  app.post("/api/users/save", function(req, res){
    var sessionToken = req.body.sessionToken;
    findCurrentUser(sessionToken).then(function(currentUser){
      var username = req.body.username;
      var email = req.body.email;
      var password = req.body.password;
      var sessionToken = base64URL.encode(crypto.generateToken());

      if(!validate.username(username).success){
        writeResponse(res, {status: 422, error: "username validation failed", errors: ["Make sure username is not more than 25 characters."]});
        return 1;
      }

      if(!Validate.password(password).success){
        writeResponse(res, {status: 422, error: "password validation failed", errors: ["Make sure password is at least 6 characters long."]});
        return 1;
      }

      var salt = bcrypt.genSaltSync(10);
      var password_digest = bcrypt.hashSync(password, salt);

      User.create({
        username: username,
        email: email,
        password_digest: password_digest,
        sessionToken: sessionToken
      }, function(err, model){
        if(err){
          writeResponse(res, {status: 422, error: "creation error", errors: err});
        }else{
          res.cookie("lanyardblue-session", sessionToken, { maxAge: 900000, httpOnly: true });
          writeResponse(res, {status: 200, success: "creation success", user: model});
        };
      });
    });

    var newSessionToken = base64URL.encode(crypto.generateToken());
    user.sessionToken = newSessionToken;
    user.save();
    res.cookie("lanyardblue-session", newSessionToken);
    writeResponse(res, { status: 200, success: "verification success", user: user });
  });
}

module.exports = addRoutes;
