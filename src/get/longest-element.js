/**
 * Given a string array, return the longest element in the array.
 *
 * @param   {string[]} array Input string array.
 * @returns {string}         Longest element.
 * @example
 *
 *  var arr = ['one', 'two', 'three']
 */
function getLongestElement(array) {
  /** @type {string} */
  let longestElement = ''

  if (array.length <= 0)
    return longestElement

  longestElement = array.reduce(
    /**
     * @param   {string} prev Previous value.
     * @param   {string} curr Current value.
     * @returns {string}      Longest string.
     */
    (prev, curr) => (prev.length > curr.length ? prev : curr),
  )

  return longestElement
}

export { getLongestElement }
