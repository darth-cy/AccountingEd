import React from 'react'

function logout(){
  $.ajax({
    url: "/api/session/delete",
    method: "DELETE",
    dataType: "json",
    contentType: "application/json",
    success: function(response){
      var user = response.user;
      window.location = "/login";
    },

    error: function(response){
      addError("not successful");
    }
  });
}

var Navbar = () => {
  return (
    <div className="container-fluid navbar">
      <h3>Lanyard Blue</h3>
      <span>Automated Personal Finance Exercises</span>
      <img className="navbar-img" src="/images/logout.png" onClick={logout}/>
    </div>
  );
}

export default Navbar;
