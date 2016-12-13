import React from 'react'
import StepInChapters from './step_in_chapters.js'

var Chapters = (props) => {
  var thisView = this;

  return (
    <div>
      <div className="col-md-4 chapters-list">
        <h3>Available Chapters ></h3>
        <div>
          {$.map(props.chapters, (chapter, idx) => (
            <div className="chapters-list-item" onClick={function(){
              props.selectChapter(chapter.id);
            }} key={chapter.id}>{idx + ". " + chapter.title}</div>
          ))}
        </div>
      </div>
      <div className="col-md-8 chapters-detailed">
        <h2>{props.currentChapter.title}</h2>
        <p>{props.currentChapter.description}</p>
        <button className="btn btn-default chapter-go-button">Start Chapter Exercises</button>
        <hr/>
        <div>
          {props.currentChapter.steps.map((step, idx) => {
            return (
              <StepInChapters key={idx} index={idx + 1} step={step}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Chapters;
