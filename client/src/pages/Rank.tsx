import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { listRank } from '../api/client'
import { BasicButtons, Loading } from '../components'
import { useAppContext } from '../context/context'

export const Rank = () => {
  const { score, setInitialState } = useAppContext()
  // Upon Page render, make an API call with the final score to get the user rank
  const { data, error, isLoading } = useQuery(['listRank', { score }], listRank)

  if (error) {
    return <div>error getting data</div>
  }

  // When try again is clicked, reset the application state to its initial value
  const handleTryAgain = () => {
    setInitialState()
  }

  return (
    <Box sx={{ margin: '2rem' }}>
      {isLoading ? <Loading /> : (
        <>
          <Box sx={{ margin: '2rem' }}>
            <h3>Your Score: {score}</h3>
            <h3>Your Rank: {data.data}</h3>
          </Box>
          <BasicButtons handleClick={handleTryAgain} textValue='try again' />
        </>
      )}
    </Box>
  )
}