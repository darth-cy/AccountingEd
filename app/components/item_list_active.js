import React from 'react'
import Item from './item'

var ItemListActive = (props) => {
  return (
    <div className="item-list-active">
      <div className="item-list-active-title">{props.title}</div>
      {props.items.map((item, idx) => (
        <div className="item-list-active-item" key={idx}>
          <div className="col-sm-6">
            {item.name}
          </div>
          <div className="col-sm-6">
            ${item.amount}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemListActive;
