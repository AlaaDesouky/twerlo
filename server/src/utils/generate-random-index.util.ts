/* -- generate-random-index.util.ts --
 *
 * Utility function that generates unique random numbers within a certain range
*/


export const generateRandomIdx = (itemsCount: number, maxSize: number): number[] => {
  let result = [];

  while (result.length < itemsCount) {
    // Get a random number
    const randomIdx = Math.floor(Math.random() * maxSize)

    // Check if the number is not generated already
    if (result.indexOf(randomIdx) === -1) {
      result.push(randomIdx)
    }
  }

  return result;
}