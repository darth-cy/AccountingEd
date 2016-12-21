if(typeof User == 'undefined'){
  var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password_digest: String,
    sessionToken: String,
    data: mongoose.Schema.Types.Mixed,
  });

  User = mongoose.model("User", userSchema);
}

module.exports = User;
