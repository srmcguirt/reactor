/**
 * Given an array, return a new array where each element is squared.
 * @param {Array<number>} arr
 * @returns Array<number> newArr
 */
function squareElements(arr) {
  /**
   * @type Array<number>
   */
  let newArr = [...arr];
  /**
   * Map and use Math pow to square.
   */
  return newArr.map((v) => Math.pow(v, 2));
}
