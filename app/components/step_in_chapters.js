import React from 'react'
import ItemList from './item_list'

var StepInChapters = (props) => {
  return (
    <div className="step-in-chapters">
      <div className="col-sm-6">
        <h4>Step {props.index}. {props.step.step_title}</h4>
        <p>{props.step.description}</p>
      </div>
      <div className="col-sm-6">
        <ItemList title="Action Items" items={props.step.action_items}/>
      </div>
    </div>
  );
}

export default StepInChapters;
