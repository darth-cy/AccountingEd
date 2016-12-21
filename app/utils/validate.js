// The module for verifying different database fields
if(typeof validate == 'undefined'){
  validate = {};
}

validate.username = function(str){
  var result = { success: true, errors: [] };

  if(str.length > 25){
    result.success = false;
    result.errors.push("Username is too long (maximum 25 characters)");
  }

  return result;
};

validate.password = function(str){
  var result = { success: true, errors: [] };

  if(str.length < 6){
    result.success = false;
    result.errors.push("Password is too short");
  }

  return result;
};

module.exports = validate;
