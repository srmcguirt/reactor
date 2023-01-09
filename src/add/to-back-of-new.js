/**
 * Given and array and an element, return a clone of the array with the element added to the back.
 *
 * @param   {Array<any>} arr     Array to clone.
 * @param   {*}          element Element to add to the back of the array.
 * @returns {Array<any>}         Clone of the array with the element added to the back.
 */
function addToBackOfNew(arr, element) {
  /** @constant {Array<any>} */
  const result = [...arr]
  result.push(element)
  return result
}
export { addToBackOfNew }
