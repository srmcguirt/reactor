/**
 * Given an array, return a new array where each element is squared.
 *
 * @param   {number[]} array Input array.
 * @returns {number[]}       Array with squared elements.
 */
function squareElements(array) {
  /** @constant {number[]} */
  const newArray = [...array]

  /** @constant {number} */
  const squareExponent = 2
  return newArray.map(v => v ** squareExponent)
}

export { squareElements }
