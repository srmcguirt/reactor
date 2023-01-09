/**
 * Given an array, return a new array where each element is squared.
 *
 * @param   {number[]} array Input array.
 * @returns {number[]}       Array with squared elements.
 */
function squareElements(array) {
  /**
   * @type {number[]}
   */
  const newArray = [...array]
  /**
   * Map and use Math pow to square.
   */
  return newArray.map(v => v ** 2)
}

export { squareElements }
