import React from 'react'
import StepInChapter from './step_in_chapter'

var Chapter = (props) => {
  var thisView = this;
  var moveUtilities = {
    selectItem: props.selectItem,
    stopMoveProgress: props.stopMoveProgress,
    selectTargetItem: props.selectTargetItem,
    deselectTargetItem: props.deselectTargetItem,
    moveItem: props.moveItem,
  }

  return (
    <div>
      <div className="col-md-4 chapters-list">
        <h3>{props.currentChapter.title}</h3>
        <div>
          {props.currentChapter.steps.map((step, idx) => {
            return (
              <StepInChapter key={idx} index={idx + 1} step={step} moveUtilities={moveUtilities}/>
            )
          })}
        </div>
      </div>
      <div className="col-md-8 chapters-detailed">
        <button className="btn btn-default chapter-go-button" onClick={() => {
           props.goBackChapters();
        }}>Back to Chapters</button>
        <hr/>
      </div>
    </div>
  );
}

export default Chapter;
