/**
 * Given an array and an element, return a clone of the array with the element added to the front.
 *
 * @param   {Array<any>} arr     Array to clone.
 * @param   {*}          element Element to add to the front of the array.
 * @returns {Array<any>}         Clone of the array with the element added to the front.
 */
function addToFrontOfNew(arr, element) {
  /** @constant {Array<any>} */
  const result = [...arr]
  result.unshift(element)
  return result
}

export { addToFrontOfNew }
