import { connect } from 'react-redux';
import { outputContent, selectChapter, startChapter } from './actions';

import MainApplication from './main_application';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  outputContent: (specs) => dispatch(outputContent(specs)),
  selectChapter: (specs) => dispatch(selectChapter(specs)),
  startChapter: (specs) => dispatch(startChapter(specs)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApplication)
