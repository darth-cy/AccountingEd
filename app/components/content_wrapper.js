import React from 'react'
import Chapters from './chapters.js'
import Chapter from './chapter.js'

var ContentWrapper = (props) => {
  switch (props.states.mode) {
    case "chapters":
      return (
        <Chapters chapters={props.states.chapters} selectChapter={props.selectChapter} />
      );
      break;
    case "chapter":
      return (
        <Chapter chapter={props.states.currentChapter} switchMode={props.switchMode} />
      );
      break;
  }

  return (
    <div>nothing</div>
  )
}

export default ContentWrapper;
