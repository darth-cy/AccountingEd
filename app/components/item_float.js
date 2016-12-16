import React from 'react'

var ItemFloat = React.createClass({
  getInitialState: () => ({}),
  formatNumber: function(num){
    return num.toString().replace(/\B(?=(\d{3))+(?!\d)/g, ",");
  },
  render: function(){
    var selectedItem = this.props.currentSelectedItem;
    if(!!selectedItem){
      return (<div className="item-float">{selectedItem.name} | {this.formatNumber(selectedItem.amount)}</div>);
    }else{
      return (<div></div>);
    }
  },
  componentDidMount: function(){
    var mouseX;
    var mouseY;
    $(document).mousemove( function(e) {
       mouseX = e.pageX;
       mouseY = e.pageY;
       $('.item-float').css({'top':mouseY,'left':mouseX});
    });
  }
})

export default ItemFloat;
