/**
 * Given an object and key, return the first element of the array at given key.
 *
 * @param   {Object<string,number[]>} obj Input object.
 * @param   {string}                  key Input key.
 * @returns {number|undefined}            Returns undefined or first element.
 */
function getFirstElementOfProperty(obj, key) {
  // if array is empty, return undefined
  // if no prop at key, return undefined
  // if prop at key is not an array, return undefined
  if (obj[key] === undefined || !Array.isArray(obj[key]))
    return undefined

  else
    return obj[key][0]
}

export { getFirstElementOfProperty }
