/* -- generate-random-data.util.ts --
 *
 * Utility function that generates a random amount of unique data
 * It checks if at least one unique key is available within the dataset
*/
import { compareSets } from './compare-sets.util'
import { generateRandomIdx } from './generate-random-index.util'


export const generateRandomData = (data: object[], uniqueKey: string, count: number): object[] => {
  const randomIdxArray = generateRandomIdx(count, data.length)
  const generatedData = randomIdxArray.map(id => data[id])

  const originalDataSet = new Set(data.map(item => item[uniqueKey]))
  const generatedDataSet = new Set(generatedData.map(item => item[uniqueKey]))

  if (!compareSets(originalDataSet, generatedDataSet)) {
    generateRandomData(data, uniqueKey, count)
  }

  return generatedData;
}