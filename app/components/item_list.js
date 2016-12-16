import React from 'react'
import Item from './item'

var ItemList = (props) => {
  return (
    <div className="item-list">
      <div className="item-list-title">{props.title}</div>
      {props.items.map((item, idx) => (
        <div className="item-list-item" key={idx}>
          <div className="col-sm-6">
            {item.name}
          </div>
          <div className="col-sm-6">
            ${props.formatNumber(item.amount)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
