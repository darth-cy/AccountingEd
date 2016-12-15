import React from 'react'
import ItemListActive from './item_list_active'

var Chapter = (props) => {
  return (
    <div className="step-in-chapter">
      <div className="col-sm-12">
        <h4>Step {props.index}. {props.step.step_title}</h4>
        <p>{props.step.description}</p>
      </div>
      <div className="col-sm-12">
        <ItemListActive title="Action Items" items={props.step.action_items}/>
      </div>
    </div>
  );
}

export default Chapter;
