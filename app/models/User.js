if(typeof User == 'undefined'){
  var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password_digest: String,
    sessionToken: String,
    premium: Boolean,
    data: mongoose.Schema.Types.Mixed,
    chaptersPassed: {type: mongoose.Schema.Types.Mixed, default: {}},
  });

  User = mongoose.model("User", userSchema);
}

module.exports = User;
