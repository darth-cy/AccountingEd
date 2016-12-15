import React from 'react'
import StepInChapters from './step_in_chapters'

var Chapter = (props) => {
  var thisView = this;

  return (
    <div>
      <div className="col-md-4 chapters-list">
        <h3>props.currentChapter.title</h3>
        <div>
          {props.currentChapter.steps.map((step, idx) => {
            return (
              <StepInChapters key={idx} index={idx + 1} step={step}/>
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
