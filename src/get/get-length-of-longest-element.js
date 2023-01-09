/**
 * Given an array return the length of the longest string.
 *
 * @param   {string[]} array Input array.
 * @returns {number}         Length of longest string.
 */
export function getLengthOfLongestElement(array) {
  if (array.length <= 0)
    return 0

  return Math.max(...array.map(v => v.length))
}
