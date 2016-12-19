if(typeof User == 'undefined'){
  var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password_digest: String,
    sessionToken: String
  });

  User = mongoose.model("User", userSchema);
}

module.exports = User;
