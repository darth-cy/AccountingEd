import React from 'react'

var FirstComponent = React.createClass({
  getInitialState: function(){
    return {
      contentText: "This is the first component.",
    };
  },

  render: function(){
    var thisView = this;

    return (
      <div>
        <button onClick={function(){ thisView.props.outputContent(thisView.state.contentText); }} >Print</button>
      </div>
    );
  }
});

export default FirstComponent;
