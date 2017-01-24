// The module for generating docId and cheat codes

var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!?";
var processChars = "abcdefhkmnorstuvwxz0123456789";
var keyChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateString(lng){
  var result = "";
  for(var i = 0; i < 16; i++){
    result += chars.charAt(Math.floor(Math.random()*chars.length));
  };
  return result;
}

function generateProcessString(){
  var result = "$";
  for(var i = 0; i < 8; i++){
    result += processChars.charAt(Math.floor(Math.random()*processChars.length));
  };
  return result;
}

function generateUnlockKey(){
  var result = "";
  for(var i = 0; i < 10; i++){
    result += keyChars.charAt(Math.floor(Math.random()*keyChars.length));
  };
  return result;
}

var Crypto = {
  // Cheat Codes are 8 chars long
  generateCheatCode: function(){
    return generateString(8);
  },

  generateUnlockKey: function(){
    return generateUnlockKey(10);
  },

  generateProcessId: function(){
    return generateProcessString(8);
  },

  // DocIds are 16 chars long
  generateDocId: function(){
    return generateString(16);
  },

  generateToken: function(){
    return generateString(32);
  }
}

module.exports = Crypto;
