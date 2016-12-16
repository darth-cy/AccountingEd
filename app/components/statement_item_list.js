import React from 'react'
import Item from './item'

var StatementItemList = (props) => {
  var moveInProgress = props.itemMoveStates.moveInProgress;
  var currentSelectedItem = props.itemMoveStates.currentSelectedItem;
  var currentSelectedList = props.itemMoveStates.currentSelectedList;
  var currentTargetItem = props.itemMoveStates.currentTargetItem;
  var currentTargetList = props.itemMoveStates.currentTargetList;

  return (
    <div className="item-list-active">
      <div className="item-list-active-title" onMouseEnter={() => {
        if(moveInProgress){
          props.moveUtilities.selectTargetItem({
            list: props.name,
            item: {name: "_init"}
          })
        }else{
          console.log("enter");
        }
      }}
      onClick={()=>{
        props.moveUtilities.moveItem();
      }}>{props.list.length > 0 ? (<span className="star">&#9733; &nbsp;&nbsp;</span>) : (<span className="star">&#9734; &nbsp;&nbsp;</span>) } {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
      {moveInProgress && !!currentTargetItem && currentTargetItem.name == "_init" && currentTargetList == props.name && currentSelectedList != props.name ? (<div className="item-list-placeholder" onClick={()=>{
        props.moveUtilities.moveItem();
      }}>placeholder</div>): (<div></div>)}
      {props.list.map((item, idx) => {
        if(!!currentSelectedItem && item.name == currentSelectedItem.name){
          return (<div className="item-list-placeholder" key={idx}>placeholder</div>);
        }else{
          return (
            <div key={idx}>
              <div className="item-list-active-item" onClick={() => {
                if(moveInProgress){
                  props.moveUtilities.moveItem();
                }else{
                  props.moveUtilities.selectItem({
                    list: props.name,
                    item: item
                  })
                }
              }}
              onMouseEnter={() => {
                if(moveInProgress){
                  props.moveUtilities.selectTargetItem({
                    list: props.name,
                    item: item
                  })
                }else{
                  console.log("enter");
                }
              }}>
                <div className="col-sm-6">
                  {item.name}
                </div>
                <div className="col-sm-6">
                ${item.amount}
                </div>
              </div>
              {moveInProgress && !!currentTargetItem && item.name == currentTargetItem.name && currentSelectedList != props.name ? (<div className="item-list-placeholder" onClick={()=>{
                props.moveUtilities.moveItem();
              }}>placeholder</div>): (<div></div>)}
            </div>
          )
        }
      })}
    </div>
  );
}

export default StatementItemList;