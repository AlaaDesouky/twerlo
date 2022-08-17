export interface WordObject {
  id: number,
  word: string,
  pos: string
}

export interface IWordState extends IActionMethods {
  wordsList: WordObject[] | [],
  wordsCount: number,
  labelList: string[],
  currentWord: WordObject | null,
  count: number,
  score: number,
  isCorrect: boolean,
  isFinished: boolean,
  isDisabled: boolean
}

export interface IActionMethods {
  setData({ wordsList, wordsCount, labelList }: { wordsList: WordObject[], labelList: string[], wordsCount: number }): void
  setIsCorrect(isAnswerCorrect: boolean): void
  setIsFinished(isFinished: boolean): void
  setScore(score: number): void
  setCount(count: number): void
  setInitialState(): void
}


export interface IAction {
  type: string | boolean,
  payload?: any
}