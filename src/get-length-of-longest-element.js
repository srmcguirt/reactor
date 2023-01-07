/**
 * Given an array return the length of the longest string.
 * @param {Array<string>} arr
 * @returns number
 */
function getLengthOfLongestElement(arr) {
  if (arr.length <= 0) {
    return 0
  } else {
    return Math.max(...arr.map(v => v.length))
  }
}
