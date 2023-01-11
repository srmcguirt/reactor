/**
 * Given an array of elements, return an array containing items that do not match the given discard parameter.
 *
 * @param   {number[]}       array   Input array.
 * @param   {number}         discard Array filter.
 * @returns {any[]|number[]}         Filtered array.
 */
function removeElement(array, discard) {
  // if empty array passed in, return empty array
  if (!Array.isArray(array))
    return []

  const filteredArray = array.filter(v => v !== discard)
  return filteredArray
}

export { removeElement }
