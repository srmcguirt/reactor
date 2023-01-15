/**
 * Given an array, return the longest string within the array.
 *
 * @param   {any[]}  arr Input array.
 * @returns {string}     Return empty string or longest string in array.
 */
function getLongestWordOfMixedElements(arr) {
  if (!Array.isArray(arr))
    return ''

  else if (arr.length <= 0)
    return ''

  else if (arr === undefined)
    return ''

  // flatten the array in case of nested arrays.
  const flatArray = arr.flat(Infinity)
  // filter non-strings
  const filteredArray = flatArray.filter(v => typeof v === 'string' && v.length !== 0)
  // return if no strings left
  if (filteredArray.length <= 0)
    return ''
  // sort the remaining string
  const sortedArray = filteredArray.sort((a, b) => b.length - a.length)
  // return the sorted results
  return sortedArray[0]
}

export { getLongestWordOfMixedElements }
