/* -- compare-sets.util.ts --
 *
 * Utility function that if two Sets have the same values
*/

export const compareSets = (firstSet: Set<any>, secondSet: Set<any>): boolean => {
  return firstSet.size === secondSet.size && [...firstSet].every((x) => secondSet.has(x))
}