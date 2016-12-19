import React from 'react';
import ContentWrapper from './components/content_wrapper.js';
import Navbar from './components/navbar.js';
import ItemFloat from './components/item_float';

const MainApplication = React.createClass({
  getInitialState: () => ({
    mouseX: 0,
    mouseY: 0
  }),
  render: function(){
    return(
      <div className="container-fluid">
      <ItemFloat currentSelectedItem={this.props.itemMoveStates.currentSelectedItem}
        mouseX={this.state.mouseX}
        mouseY={this.state.mouseY}
      />
      <Navbar />
      <ContentWrapper states={this.props}/>
      </div>
    )
  },
  componentDidMount: function(){
    var thisView = this;

    $(document).mousemove( function(e) {
       thisView.setState({
         mouseX: e.pageX,
         mouseY: e.pageY
       })
    });
  }
});

export default MainApplication;
