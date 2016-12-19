import React from 'react'
import ItemList from './item_list'

var StepInChapters = (props) => {
  return (
    <div className="step-in-chapters">
      <div className="col-sm-6">
        <h4>Step {props.index}. {props.step.step_title}</h4>
        <p>{props.step.description}</p>
      </div>
      <br/>
      <div className="col-sm-6">
        <ItemList title="Action Items" items={props.step.action_items} formatNumber={props.formatNumber}/>
      </div>
      <span className="separate"></span>
    </div>
  );
}

export default StepInChapters;
