import { WordsActions } from './actions';
import { IAction, IWordState } from './types';


export const reducer = (state: IWordState, action: IAction) => {
  switch (action.type) {
    case WordsActions.SET_WORDS_LIST:
      return { ...state, ...action.payload }

    case WordsActions.SET_CURRENT_WORD:
      const { wordsList, count } = state;
      return { ...state, currentWord: wordsList[count] }

    case WordsActions.SET_IS_CORRECT:
      return { ...state, isCorrect: action.payload }

    case WordsActions.SET_IS_DISABLED:
      return { ...state, isDisabled: action.payload }

    case WordsActions.SET_IS_FINISHED:
      return { ...state, isFinished: action.payload }

    case WordsActions.SET_SCORE:
      return { ...state, score: state.score + action.payload }

    case WordsActions.SET_COUNT:
      return { ...state, count: state.count + action.payload }

    case WordsActions.SET_INITIAL_STATE:
      return { ...action.payload }

    default:
      return state;
  }

}