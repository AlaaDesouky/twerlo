/* -- calculate.util.ts --
 *
 * Utility function that calculates rank of a candidate out of a score list
*/

const closestValue = (scoresList: number[], score: number): number => {
  const valuesSet = [...new Set(scoresList)]
  for (let value of valuesSet) {
    if (value > score) return value
  }
}

export const calculateRank = (scoresList: number[], score: number): number => {
  scoresList = scoresList.sort((a, b) => a - b)
  // If the score is not included in score list, get the index of the nearest greater number 
  const idx = scoresList.indexOf(score) !== -1 ? scoresList.indexOf(score) : scoresList.indexOf(closestValue(scoresList, score))
  let rank = (scoresList.slice(0, idx).length / scoresList.length) * 100
  return Math.ceil(rank * 100) / 100
}