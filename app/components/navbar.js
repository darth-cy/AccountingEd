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
      <h3><img className="logo-image" src="/images/logoblue.png" />Lanyard Blue</h3>
      <span>A hands-on journey of wealth accumulation</span>
      <img className="navbar-img" src="/images/logout.png" onClick={logout}/>
    </div>
  );
}

export default Navbar;
