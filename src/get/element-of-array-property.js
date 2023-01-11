/**
 * Given an object, key, and index, return the value of the element at the given index.
 *
 * @param   {Object<string, any[]>} obj   Input object.
 * @param   {string}                key   Input key.
 * @param   {number}                index Input index.
 * @returns {undefined|any}               Returns undefined or value.
 */
function getElementOfArrayProperty(obj, key, index) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
    || index > obj[key].length
  )
    return undefined

  return obj[key][index]
}

export { getElementOfArrayProperty }
