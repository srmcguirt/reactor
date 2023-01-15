/**
 * Given an array, return the largest number within the array.
 *
 * @param   {any[]}  arr Input array.
 * @returns {number}     Return zero or largest number in array.
 */
function getLargestNumberAmongMixedElements(arr) {
  if (!Array.isArray(arr))
    return 0

  else if (arr.length <= 0)
    return 0

  else if (arr === undefined)
    return 0

  // flatten the array in case of nested arrays.
  const flatArray = arr.flat(Infinity)
  // filter non-strings
  const filteredArray = flatArray.filter(v => typeof v === 'number' && v !== 0)
  // return if no strings left
  if (filteredArray.length <= 0)
    return 0
  // sort the remaining string
  /** @constant {number[]} */
  const sortedArray = filteredArray.sort((a, b) => b - a)
  // return the sorted results
  return sortedArray[0]
}

export { getLargestNumberAmongMixedElements }
