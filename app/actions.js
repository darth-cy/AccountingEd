export const OUTPUT_CONTENT = "OUTPUT_CONTENT";
export const SELECT_CHAPTER = "SELECT_CHAPTER";
export const START_CHAPTER = "START_CHAPTER";

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
