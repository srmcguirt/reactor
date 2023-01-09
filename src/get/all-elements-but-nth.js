/**
 * Given an array and an index, return a new array with all the elements but the one at the given index.
 *
 * @param   {any[]}  array Input array.
 * @param   {number} n     Index of element to remove.
 * @returns {any[]}        New array with all elements but the one at the given index.
 */
function getAllElementsButNth(array, n) {
  /** @constant {any[]} */
  const result = [...array].filter((_, i) => i !== n)
  return result
}

export { getAllElementsButNth }
