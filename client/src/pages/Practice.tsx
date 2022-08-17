import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { listWords } from '../api/client';
import { BasicButtons, Loading, ProgressBar, RowRadioButtonsGroup } from '../components'
import { useAppContext } from '../context/context'



export const Practice = () => {
  // Upon Page render, make an API call with the desired number of words to get the words list, it's defaulted to 10
  const initialWordsCount = 10;
  const { data, error, isLoading } = useQuery(['listWords', { wordsCount: initialWordsCount }], listWords)


  const {
    currentWord,
    wordsCount,
    count,
    labelList,
    isCorrect,
    isDisabled,
    setData,
    setIsCorrect,
    setIsFinished,
    setScore,
    setCount
  } = useAppContext()


  // Populate the application state with the date returned from the api 
  useEffect(() => {
    if (data) {
      const { data: wordsList, count: wordsCount, labelList } = data
      setData({ wordsList, wordsCount, labelList })
    }
  }, [data])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>error getting data</div>
  }


  // Move to the next question or finish the test upon the current word state
  const handleProgress = () => {
    if (count >= wordsCount - 1) {
      setIsFinished(true)
      return
    }
    setCount(1)
  }

  // Validated the user answer with original answer
  // Disable the buttons to prevent further actions
  // Upon the check, user will get a feedback if the answer is correct or not and can proceed to the next step
  const validateAnswer = (target: any) => {
    setIsCorrect(target.value === currentWord?.pos)
    target.value === currentWord?.pos && setScore(10)
  }

  return (
    <>
      <Box sx={{ margin: '2rem' }}>
        <ProgressBar value={((count + 1) / wordsCount) * 100} />
        <Box sx={{ margin: '2rem' }}>
          {/* Populate the radio button with the current state values */}
          <RowRadioButtonsGroup
            key={currentWord?.id}
            word={currentWord?.word}
            labelsList={labelList}
            correct={isCorrect}
            disabled={isDisabled}
            handleClick={(target) => validateAnswer(target)} />
        </Box>
      </Box>
      <Box sx={{ margin: '2rem' }}>
        <BasicButtons handleClick={handleProgress} textValue={count > wordsCount - 2 ? 'finish' : 'next'} />
      </Box>
    </>
  )
}