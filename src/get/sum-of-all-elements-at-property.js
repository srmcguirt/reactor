/**
 * Given an object, return the sum of all the elements in the array at the given key.
 *
 * @param   {Object<string, number[]>} obj Input object array.
 * @param   {string}                   key Input key.
 * @returns {number}                       Returns zero or sum of elements.
 */
function getSumOfAllElementsAtProperty(obj, key) {
  /** @type {number} */
  let sum = 0

  if (
    obj === undefined
    || obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return 0

  const arr = obj[key]

  for (let i = 0; i < arr.length; i++)
    sum += arr[i]

  return sum
}

export { getSumOfAllElementsAtProperty }
