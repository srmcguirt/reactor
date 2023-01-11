/**
 * Given an object and key, return an array with elements at the key that are greater than ten.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {number[]|undefined}           Empty or number array of values greater than ten.
 */
function getElementsGreaterThan10AtProperty(obj, key) {
  // no magic numbers
  /** @constant {number} */
  const ten = 10
  // if array is empty, return empty array.
  if (!obj[key])
    return []
  // if prop at key is not an array, return empty array.
  else if (!Array.isArray(obj[key]))
    return []
  // if no prop at key, return empty array.
  else if (obj[key] === undefined)
    return []
  // if no elements greater than ten, return empty
  else
    return obj[key].filter(value => value > ten)
}

const obj = {
  key: [1, 20, 30],
}
const output = getElementsGreaterThan10AtProperty(obj, 'key')
console.log(output) // --> [20, 30]

export { getElementsGreaterThan10AtProperty }
