/**
 * Application context
 */
import { createContext, ReactNode, useContext, useReducer } from 'react';
import { WordsActions } from './actions';
import { reducer } from './reducer';
import { IWordState, WordObject } from './types';

const initialState: IWordState = {
  wordsList: [],
  wordsCount: 0,
  labelList: [],
  currentWord: null,
  count: 0,
  score: 0,
  isCorrect: false,
  isFinished: false,
  isDisabled: false,

  setData({ wordsList, wordsCount, labelList }: { wordsList: WordObject[], labelList: string[], wordsCount: number }): void { },
  setIsCorrect(isAnswerCorrect: boolean): void { },
  setIsFinished(isFinished: boolean): void { },
  setScore(score: number): void { },
  setCount(count: number): void { },
  setInitialState(): void { }
}

// Initialize a new context
const AppContext = createContext(initialState)

// Initialize context provider
type AppProviderProps = {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Populate the state after getting the data from the server
  function setData({ wordsList, wordsCount, labelList }: { wordsList: WordObject[], labelList: string[], wordsCount: number }): void {
    dispatch({ type: WordsActions.SET_WORDS_LIST, payload: { wordsList, wordsCount, labelList } })
    setCurrentWord()
  }

  // Handle the current word to be displayed to the user
  function setCurrentWord(): void {
    dispatch({ type: WordsActions.SET_CURRENT_WORD })
  }

  // Set the user's answer correct | not correct
  function setIsCorrect(isAnswerCorrect: boolean): void {
    dispatch({ type: WordsActions.SET_IS_CORRECT, payload: isAnswerCorrect })
    setIsDisabled(true)
  }

  // Disable certain buttons
  function setIsDisabled(isDisabled: boolean): void {
    dispatch({ type: WordsActions.SET_IS_DISABLED, payload: isDisabled })
  }

  // Set the state of the test
  function setIsFinished(isFinished: boolean): void {
    dispatch({ type: WordsActions.SET_IS_FINISHED, payload: isFinished })
  }

  // Calculate the score upon each question
  function setScore(score: number): void {
    dispatch({ type: WordsActions.SET_SCORE, payload: score })
  }

  // Set the counter for the current word
  function setCount(count: number): void {
    dispatch({ type: WordsActions.SET_COUNT, payload: count })
    setIsDisabled(false)
    setCurrentWord()
  }

  // Reset the application state
  function setInitialState(): void {
    dispatch({ type: WordsActions.SET_INITIAL_STATE, payload: initialState })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setData,
        setIsCorrect,
        setIsFinished,
        setScore,
        setCount,
        setInitialState
      }}>
      {children}
    </AppContext.Provider>
  )

}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }

