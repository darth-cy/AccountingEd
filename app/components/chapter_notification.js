import React from 'react'

var ChapterNotification = React.createClass({
  render: function(){
    var thisView = this;
    var dismissNotification = function(){
      thisView.props.changeNotificationState("incomplete");
    }

    if(this.props.evaluation == "correct"){
      $(window).scrollTop(0);
      return (
        <div id="notification" className="alert alert-dismissible alert-success">
          &nbsp;&nbsp;Fantastic! You have passed this exercise!
          &nbsp;&nbsp;<button className="dismiss-success-button" onClick={thisView.props.goBackChapters}>back to the chapters</button>
        </div>
      )
    }else if(this.props.evaluation == "incorrect"){
      $(window).scrollTop(0);
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
