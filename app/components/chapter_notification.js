import React from 'react'

var ChapterNotification = React.createClass({
  render: function(){
    var thisView = this;
    var dismissNotification = function(){
      thisView.props.changeNotificationState("incomplete");
    }

    if(this.props.evaluation == "correct"){
      return (<div className="col-md-12">You have passed all criterias for this exercise!</div>)
    }else if(this.props.evaluation == "incorrect"){
      return (
        <div id="notification" className="alert alert-dismissible alert-danger">
        &nbsp;&nbsp;Oops! It seems some items are in the wrong lists.
        &nbsp;&nbsp;<button className="dismiss-error-button" onClick={dismissNotification}>dismiss</button>
        </div>
      )
    }else{
      return (<div></div>)
    }
  }
})

export default ChapterNotification;
