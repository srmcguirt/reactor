/**
 * Given an object and key, return the last element of an array at the key.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {undefined|number}             Return undefined or last element at key.
 */
function getLastElementOfProperty(obj, key) {
  if (obj[key] === undefined || !Array.isArray(obj[key]))
    return undefined

  const len = obj[key].length - 1
  return obj[key][len]
}

export { getLastElementOfProperty }
