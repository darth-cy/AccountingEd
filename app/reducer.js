import { OUTPUT_TEONT, SELECT_CHAPTER, START_CHAPTER, GO_BACK_CHAPTERS, DESELECT_TARGET_ITEM } from './actions';
import { CHAPTERS } from './chapters/chapters';

function findCurrentStateListByName(states, name){
  switch (name) {
    case "income":
      return states.statements.cash_flow_statement.income;
    case "expenses":
      return states.statements.cash_flow_statement.expenses;
    case "assets":
      return states.statements.balance_sheet.assets;
    case "liabilities":
      return states.statements.balance_sheet.liabilities;
    case "deleted":
      return states.statements.deleted;
    default:
      for(let i = 0; i < states.steps.length; i++){
        if(states.steps[i].step_title == name){
          return states.steps[i].action_items;
        }
      }
      return NULL;
  }
  return NULL;
}

function findIdxByNameInList(list, name){
  for(var i=0; i< list.length; i++){
    if(list[i].name == name){
      return i
    }
  }
  return -1;
}

// Initial State
const _initState = {
  outputText: "(none)",
  mode: "chapters", // chapters, chapter
  user: globalUserData,
  wrongItems: {},
  currentChapterEvaluation: "incomplete",
  itemMoveStates: {
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
      newState.itemMoveStates = {
        moveInProgress: false,
        currentSelectedList: undefined,
        currentSelectedItem: undefined,
        currentTargetList: undefined,
        currentTargetItem: undefined,
      };
      newState.wrongItems = {};
      return newState;
    case "SELECT_ITEM":
      if(newState.itemMoveStates.moveInProgress){
        newState.itemMoveStates.moveInProgress = false;
        newState.itemMoveStates.currentSelectedList = undefined;
        newState.itemMoveStates.currentSelectedItem = undefined;
      }else{
        newState.itemMoveStates.moveInProgress = true;
        newState.itemMoveStates.currentSelectedList = action.payload.list;
        newState.itemMoveStates.currentSelectedItem = action.payload.item;
      }
      delete newState.wrongItems[action.payload.item.name];
      return newState;
    case "SELECT_TARGET_ITEM":
      newState.itemMoveStates.currentTargetList = action.payload.list;
      newState.itemMoveStates.currentTargetItem = action.payload.item;
      return newState;
    case "MOVE_ITEM":
      if(newState.itemMoveStates.currentSelectedList == newState.itemMoveStates.currentTargetList || !(!!newState.itemMoveStates.currentTargetList)){
      }else{
        var from = findCurrentStateListByName(newState.currentState, newState.itemMoveStates.currentSelectedList);
        var to = findCurrentStateListByName(newState.currentState, newState.itemMoveStates.currentTargetList);
        var selected = newState.itemMoveStates.currentSelectedItem;
        var target = newState.itemMoveStates.currentTargetItem;

        from.splice(findIdxByNameInList(from, selected.name), 1);
        to.splice(findIdxByNameInList(to, target.name) + 1, 0, selected);
      }
      newState.itemMoveStates = {
        moveInProgress: false,
        currentSelectedList: undefined,
        currentSelectedItem: undefined,
        currentTargetList: undefined,
        currentTargetItem: undefined,
      };
      return newState;
    case "CHECK_ANSWER":
      var shouldContain = newState.currentChapter.criteria.should_contain;
      var shouldBe = newState.currentChapter.criteria.should_be;
      var correct = true;
      newState.currentChapterEvaluation = "correct";

      shouldContain.forEach(function(criteriaItem){
        if(findIdxByNameInList(findCurrentStateListByName(newState.currentState, criteriaItem[0]), criteriaItem[1]) < 0){
          newState.wrongItems[criteriaItem[1]] = true;
          correct = false;
          newState.currentChapterEvaluation = "incorrect";
        }
      });

      return newState;
    case "SAVE_USER":
      debugger;
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
