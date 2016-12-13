import { OUTPUT_TEONT } from './actions';

const _initState = {
  outputText: "(none)",
}

const reducer = (prevState=_initState, action) => {
  switch(action.type){
    case "OUTPUT_CONTENT":
      console.log(action.payload);
      var newState = $.extend(true, {}, prevState);
      return newState;
    default:
      return prevState;
  }
}

export default reducer;
