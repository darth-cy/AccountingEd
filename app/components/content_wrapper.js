import React from 'react'
import Chapters from './chapters.js'
import Chapter from './chapter.js'

var ContentWrapper = (props) => {
  function formatNumber(num){
    return num.toString().replace(/\B(?=(\d{3))+(?!\d)/g, ",");
  }

  switch (props.states.mode) {
    case "chapters":
      return (
        <Chapters user={props.user} chapters={props.states.chapters} currentChapter={props.states.currentChapter} selectChapter={props.states.selectChapter} startChapter={props.states.startChapter} formatNumber={formatNumber}/>
      );
      break;
    case "chapter":
      return (
        <Chapter chapter={props.states.currentChapter} currentState={props.states.currentState} switchMode={props.states.switchMode} goBackChapters={props.states.goBackChapters}
          selectItem={props.states.selectItem}
          stopMoveProgress={props.states.stopMoveProgress}
          selectTargetItem={props.states.selectTargetItem}
          deselectTargetItem={props.states.deselectTargetItem}
          moveItem={props.states.moveItem}
          itemMoveStates={props.states.itemMoveStates}
          formatNumber={formatNumber}
          checkAnswer={props.states.checkAnswer}
          saveUser={props.states.saveUser}
          wrongItems={props.states.wrongItems}
          chapterEvaluation={props.states.currentChapterEvaluation}
        />
      );
      break;
  }

  return (
    <div>nothing</div>
  )
}

export default ContentWrapper;
