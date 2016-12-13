import { connect } from 'react-redux';
import { outputContent } from './actions';

import MainApplication from './main_application';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  outputContent: (specs) => dispatch(outputContent(specs)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApplication)
