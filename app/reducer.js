import { OUTPUT_TEONT, SELECT_CHAPTER, START_CHAPTER, GO_BACK_CHAPTERS } from './actions';
import { CHAPTERS } from './chapters/chapters';


const _initState = {
  outputText: "(none)",
  mode: "chapters", // chapters, chapter
  cardMoveStates: {
    moveInProgress: false,
    currentSelectedList: undefined,
    currentSelectedItem: undefined,
    currentTargetList: undefined,
    currentTargetItem: undefined,
  },
  currentState: CHAPTERS[1],
  currentChapter: CHAPTERS[1],
  chapters: CHAPTERS,
}

const reducer = (prevState=_initState, action) => {
  var newState = $.extend(true, {}, prevState);

  switch(action.type){
    case "OUTPUT_CONTENT":
      console.log(action.payload);
      return newState;
    case "SELECT_CHAPTER":
      newState.currentState = CHAPTERS[action.payload];
      newState.currentChapter = CHAPTERS[action.payload];
      return newState;
    case "START_CHAPTER":
      newState.mode = "chapter";
      newState.currentState = CHAPTERS[action.payload];
      newState.currentChapter = CHAPTERS[action.payload];
      newState.currentState.statements["deleted"] = [];
      return newState;
    case "GO_BACK_CHAPTERS":
      newState.mode = "chapters";
      newState.currentState = newState.currentChapter;
      newState.currentState.statements["deleted"] = [];
      return newState;
    default:
      return prevState;
  }
}

export default reducer;





// chapters: {
//   "1": {
//     id: "1",
//     title: "Getting Started",
//     description: "",
//     steps: [
//       {
//         step_title: "New Job",
//         description: "",
//         action_items: [
//
//         ]
//       },{}
//     ],
//     initial_setup: {
//       cash_flow_statement: {
//         income: [
//
//         ],
//         expenses: [
//
//         ],
//       },
//       balance_sheet: {
//         assets: [
//
//         ],
//         liabilities: [
//
//         ]
//       }
//     },
//
//   }
// }
