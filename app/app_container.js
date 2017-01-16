import { connect } from 'react-redux';
import { outputContent, selectChapter, startChapter, goBackChapters, selectItem,
         stopMoveProgress, selectTargetItem, deSelectTargetItem, moveItem,
         checkAnswer, saveUser } from './actions';

import MainApplication from './main_application';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  outputContent: (specs) => dispatch(outputContent(specs)),
  selectChapter: (specs) => dispatch(selectChapter(specs)),
  startChapter: (specs) => dispatch(startChapter(specs)),
  goBackChapters: (specs) => dispatch(goBackChapters(specs)),
  selectItem: (specs) => dispatch(selectItem(specs)),
  stopMoveProgress: (specs) => dispatch(stopMoveProgress(specs)),
  selectTargetItem: (specs) => dispatch(selectTargetItem(specs)),
  deSelectTargetItem: (specs) => dispatch(deSelectTargetItem(specs)),
  moveItem: (specs) => dispatch(moveItem(specs)),
  checkAnswer: (specs) => dispatch(checkAnswer(specs)),
  saveUser: (specs) => dispatch(saveUser(specs))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApplication)
