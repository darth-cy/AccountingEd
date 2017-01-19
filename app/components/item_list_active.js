import React from 'react'
import Item from './item'

var ItemListActive = (props) => {
  var moveInProgress = props.itemMoveStates.moveInProgress;
  var currentSelectedItem = props.itemMoveStates.currentSelectedItem;
  var currentSelectedList = props.itemMoveStates.currentSelectedList;
  var currentTargetItem = props.itemMoveStates.currentTargetItem;
  var currentTargetList = props.itemMoveStates.currentTargetList;
  var isMobile = props.device.isMobile;

  if(isMobile){
    return (
      <div className="item-list-active">
        <div className="item-list-active-title">{props.items.length > 0 ? (<span className="star">&#9733; &nbsp;&nbsp;</span>) : (<span className="star">&#9734; &nbsp;&nbsp;</span>) } {props.title}</div>
        {props.items.map((item, idx) => {
          return (
            <div key={idx}>
              <div className={"item-list-active-item " + (props.wrongItems[item.name] ? "wrong" : "")} data-dropdown={false} onClick={(e) => {
                var item = $(e.currentTarget);
                var isDropDown = item.data("dropdown");
                if(!isDropDown){
                  item.find("img").css("transform", "rotate(0.25turn)");
                  item.next().css("display", "block");
                  item.data("dropdown", true);
                }else{
                  item.find("img").css("transform", "rotate(0turn)");
                  item.next().css("display", "none");
                  item.data("dropdown", false);
                }
              }}>
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  {item.name}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  ${props.formatNumber(item.amount)}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <img className="next-step-img" src="images/next.png"/>
                </div>
              </div>
              <ul className="list-group move-item-list-group" key={idx}>
                <li className="list-group-item move-item-list-group-item">
                  <div className="btn move-item-list-group-item-btn">Move To:</div>
                  <br/>
                  <button className="btn move-item-list-group-item-btn">Income</button>
                  <button className="btn move-item-list-group-item-btn">Expenses</button>
                  <button className="btn move-item-list-group-item-btn">Assets</button>
                  <button className="btn move-item-list-group-item-btn">Liabilities</button>
                  <button className="btn move-item-list-group-item-btn">Deleted</button>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    );
  }

  return (
    <div className="item-list-active" onMouseLeave={props.moveUtilities.deSelectTargetItem}>
      <div className="item-list-active-title" onMouseEnter={() => {
        if(moveInProgress){
          props.moveUtilities.selectTargetItem({
            list: props.id,
            item: {name: "_init"},
          })
        }else{

        }
      }}
      onClick={()=>{
        props.moveUtilities.moveItem();
      }}>{props.items.length > 0 ? (<span className="star">&#9733; &nbsp;&nbsp;</span>) : (<span className="star">&#9734; &nbsp;&nbsp;</span>) } {props.title}</div>
      {moveInProgress && !!currentTargetItem && currentTargetItem.name == "_init" && currentTargetList == props.id && currentSelectedList != props.id ? (<div className="item-list-placeholder" onClick={()=>{
        props.moveUtilities.moveItem();
      }}>placeholder</div>): (<div></div>)}
      {props.items.map((item, idx) => {
        if(!!currentSelectedItem && item.name == currentSelectedItem.name){
          return (<div className="item-list-placeholder" key={idx} onClick={()=>{
            props.moveUtilities.moveItem();
          }}>placeholder</div>);
        }else{
          return (
            <div key={idx}>
              <div className={"item-list-active-item " + (props.wrongItems[item.name] ? "wrong" : "")} onClick={(e) => {
                if(moveInProgress){
                  props.moveUtilities.moveItem();
                }else{
                  props.moveUtilities.selectItem({
                    list: props.id,
                    item: item,
                    posX: e.pageX,
                    posY: e.pageY,
                  })
                }
              }}
              onMouseEnter={() => {
                if(moveInProgress){
                  props.moveUtilities.selectTargetItem({
                    list: props.id,
                    item: item
                  })
                }else{

                }
              }}>
                <div className="col-sm-6">
                  {item.name}
                </div>
                <div className="col-sm-6">
                ${props.formatNumber(item.amount)}
                </div>
              </div>
              {moveInProgress && !!currentTargetItem && item.name == currentTargetItem.name && currentSelectedList != props.id ? (<div className="item-list-placeholder" onClick={()=>{
                props.moveUtilities.moveItem();
              }}>placeholder</div>): (<div></div>)}
            </div>
          )
        }
      })}
    </div>
  );
}

export default ItemListActive;
