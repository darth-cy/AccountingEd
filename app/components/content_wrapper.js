import React from 'react'
import Chapters from './chapters.js'
import Chapter from './chapter.js'
import { CHAPTERS } from '../chapters/chapters';

var ContentWrapper = (props) => {
  function formatNumber(num){
    return num.toString().replace(/\B(?=(\d{3))+(?!\d)/g, ",");
  }

  switch (props.states.mode) {
    case "chapters":
    case "payment":
      return (
        <Chapters user={props.states.user}
          mode={props.states.mode}
          device={props.states.device}
          chapters={CHAPTERS}
          currentChapter={props.states.currentChapter}
          selectChapter={props.states.selectChapter}
          startChapter={props.states.startChapter}
          formatNumber={formatNumber}
          paymentPage={props.states.paymentPage}
          unlockUser={props.states.unlockUser}
        />
      );
      break;
    case "chapter":
      return (
        <Chapter chapter={props.states.currentChapter} currentState={props.states.currentState} switchMode={props.states.switchMode} goBackChapters={props.states.goBackChapters}
          selectChapter={props.states.selectChapter}
          selectItem={props.states.selectItem}
          stopMoveProgress={props.states.stopMoveProgress}
          selectTargetItem={props.states.selectTargetItem}
          deselectTargetItem={props.states.deselectTargetItem}
          moveItem={props.states.moveItem}
          itemMoveStates={props.states.itemMoveStates}
          formatNumber={formatNumber}
          checkAnswer={props.states.checkAnswer}
          user={props.states.user}
          device={props.states.device}
          saveUser={props.states.saveUser}
          wrongItems={props.states.wrongItems}
          chapterEvaluation={props.states.currentChapterEvaluation}
          changeNotificationState={props.states.changeNotificationState}
          moveItemMobile={props.states.moveItemMobile}
        />
      );
      break;
  }

  return (
    <div>nothing</div>
  )
}

export default ContentWrapper;
