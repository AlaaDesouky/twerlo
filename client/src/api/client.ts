/**
 *  React query methods for making API calls
 */
import { fetchData } from './fetchData'


export const listWords = async ({ queryKey }: any) => {
  const [_, wordsCount] = queryKey;
  const data = await fetchData('word', wordsCount)
  return data
}

export const listRank = async ({ queryKey }: any) => {
  const [_, score] = queryKey;
  const data = await fetchData('rank', score)
  return data
}