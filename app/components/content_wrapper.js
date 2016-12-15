import React from 'react'
import Chapters from './chapters.js'
import Chapter from './chapter.js'

var ContentWrapper = (props) => {
  switch (props.states.mode) {
    case "chapters":
    debugger;
      return (
        <Chapters chapters={props.states.chapters} currentChapter={props.states.currentChapter} selectChapter={props.states.selectChapter} startChapter={props.states.startChapter} />
      );
      break;
    case "chapter":
      return (
        <Chapter chapter={props.states.currentChapter} currentChapter={props.states.currentChapter} switchMode={props.states.switchMode} goBackChapters={props.states.goBackChapters}
          selectItem={props.states.selectItem}
          stopMoveProgress={props.states.stopMoveProgress}
          selectTargetItem={props.states.selectTargetItem}
          deselectTargetItem={props.states.deselectTargetItem}
          moveItem={props.states.moveItem}
        />
      );
      break;
  }

  return (
    <div>nothing</div>
  )
}

export default ContentWrapper;
