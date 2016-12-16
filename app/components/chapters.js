import React from 'react'
import StepInChapters from './step_in_chapters.js'

var Chapters = React.createClass({
  getInitialState: () => ({}),
  render: function(){
    var props = this.props;
    var thisView = this;

    return (
      <div>
        <div className="col-md-4 chapters-list height-align">
          <h3>Available Chapters</h3>
          <div>
            {$.map(props.chapters, (chapter, idx) => (
              <div className="chapters-list-item" onClick={function(){
                props.selectChapter(chapter.id);
              }} key={chapter.id}>{idx + ". " + chapter.title}</div>
            ))}
          </div>
        </div>
        <div className="col-md-8 chapters-detailed height-align">
          <h2>{props.currentChapter.title}</h2>
          <p>{props.currentChapter.description}</p>
          <button className="btn btn-default chapter-go-button" onClick={() => {
             props.startChapter(props.currentChapter.id);
          }}>Start Chapter Exercises</button>
          <hr/>
          <div>
            {props.currentChapter.steps.map((step, idx) => {
              return (
                <StepInChapters key={idx} index={idx + 1} step={step} formatNumber={props.formatNumber}/>
              )
            })}
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function(){
    $('.height-align').matchHeight();
  }
})

export default Chapters;
