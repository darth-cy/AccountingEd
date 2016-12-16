import React from 'react'
import ItemListActive from './item_list_active'

var StepInChapter = (props) => {
  return (
    <div className="step-in-chapter">
      <div className="col-sm-12">
        <h4>Step {props.index}. {props.step.step_title}</h4>
        <p>{props.step.description}</p>
      </div>
      <br/>
      <div className="col-sm-12">
        <ItemListActive moveUtilities={props.moveUtilities} itemMoveStates={props.itemMoveStates} isStatement={false} id={props.step.step_title} title="Action Items" items={props.step.action_items} formatNumber={props.formatNumber}/>
      </div>
    </div>
  );
}

export default StepInChapter;
