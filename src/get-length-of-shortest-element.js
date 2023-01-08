/**
 * Given an array, return the length of the shortest string.
 * @param {Array<string>} arr
 * @returns {number} shortest
 */
function getLengthOfShortestElement(arr) {
  /**
   * @type {number}
   */
  let shortest = 0;

  if (arr.length <= 0) {
    return shortest;
  } else {
    shortest = Math.min(...arr.map((v) => v.length));
    return shortest;
  }
}
