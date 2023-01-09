/**
 * Given an array, return the length of the shortest string.
 *
 * @param   {string[]} array Input array.
 * @returns {number}         Shortest element value.
 */
export function getLengthOfShortestElement(array) {
  /**
   * @type {number}
   */
  let shortestElement = 0

  if (array.length <= 0)
    return shortestElement

  shortestElement = Math.min(...array.map(v => v.length))
  return shortestElement
}
