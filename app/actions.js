export const OUTPUT_CONTENT = "OUTPUT_CONTENT";
export const SELECT_CHAPTER = "SELECT_CHAPTER";
export const START_CHAPTER = "START_CHAPTER";
export const GO_BACK_CHAPTERS = "GO_BACK_CHAPTERS";

export const outputContent = (spec) => ({
  type: OUTPUT_CONTENT,
  payload: spec
});

export const selectChapter = (spec) => ({
  type: SELECT_CHAPTER,
  payload: spec
});

export const startChapter = (spec) => ({
  type: START_CHAPTER,
  payload: spec
});

export const goBackChapters = (spec) => ({
  type: GO_BACK_CHAPTERS,
  payload: spec
})

export const SELECT_ITEM = "SELECT_ITEM";
export const STOP_MOVE_PROGRESS = "STOP_MOVE_PROGRESS";
export const SELECT_TARGET_ITEM = "SELECT_TARGET_LIST";
export const DESELECT_TARGET_ITEM = "DESELECT_TARGET_LIST";
export const MOVE_CARD = "MOVE_CARD";

export const selectItem = (spec) => ({
  type: SELECT_ITEM,
  payload: spec
})

export const stopMoveProgress = (spec) => ({
  type: STOP_MOVE_PROGRESS,
  payload: spec
})

export const selectTargetItem = (spec) => ({
  type: SELECT_TARGET_ITEM,
  payload: spec
})

export const deselectTargetItem = (spec) => ({
  type: DESELECT_TARGET_ITEM,
  payload: spec
})

export const moveItem = (spec) => ({
  type: MOVE_ITEM,
  payload: spec
})
