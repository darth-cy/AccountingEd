// The module for verifying different database fields
if(typeof Validate == 'undefined'){
  Validate = {};
}

Validate.username = function(str){
  var result = { success: true, errors: [] };

  if(str.length > 25){
    result.success = false;
    result.errors.push("Username is too long (maximum 25 characters)");
  }

  return result;
};

Validate.password = function(str){
  var result = { success: true, errors: [] };

  if(str.length < 6){
    result.success = false;
    result.errors.push("Password is too short");
  }

  return result;
};

module.exports = Validate;
