/**
 * Given an array, return the shortest string with the given element.
 *
 * @param   {string[]} arr Input string array.
 * @returns {string}       Shortest string or empty string.
 */
function findShortestElement(arr) {
  if (arr.length <= 0)
    return ''

  const arrSort = arr.sort((a, b) => a.length - b.length)
  return arrSort[0]
}

export { findShortestElement }
