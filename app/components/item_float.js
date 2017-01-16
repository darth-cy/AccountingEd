import React from 'react'

var ItemFloat = React.createClass({
  getInitialState: () => ({}),
  formatNumber: function(num){
    return num.toString().replace(/\B(?=(\d{3))+(?!\d)/g, ",");
  },
  render: function(){
    var selectedItem = this.props.currentSelectedItem;
    if(!!selectedItem){
      return (<div className="item-float">{selectedItem.name} <span>&nbsp;&nbsp;</span>| <span>&nbsp;&nbsp;</span>${this.formatNumber(selectedItem.amount)}</div>);
    }else{
      return (<div></div>);
    }
  },
  componentDidUpdate: function(){
    var mouseX;
    var mouseY;
    $(document).mousemove( function(e) {
       mouseX = e.pageX;
       mouseY = e.pageY;
       $('.item-float').css({'top':mouseY,'left':mouseX});
    });
    if(!this.props.currentSelectedItem){
      $(document).off("mousemove");
    }
    $('.item-float').css({'top':this.props.mouseY,'left':this.props.mouseX});
  }
})

export default ItemFloat;
