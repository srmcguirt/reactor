/**
 * Given an object, return shortest element of the array at given key.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {undefined|number}             Returns undefined or number.
 */
function getSmallestElementAtProperty(obj, key) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return undefined

  return obj[key].reduce((prev, curr) => prev < curr ? prev : curr)
}

export { getSmallestElementAtProperty }
