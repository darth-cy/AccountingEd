if(typeof KeyCode == 'undefined'){
  var mongoose = require('mongoose');

  var keyCodeSchema = new mongoose.Schema({
    key_code: String,
    valid: Boolean
  });

  KeyCode = mongoose.model("KeyCode", keyCodeSchema);
}

module.exports = KeyCode;
