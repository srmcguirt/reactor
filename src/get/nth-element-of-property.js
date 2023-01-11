/**
 * Given an object and key, return the nth element of an array at the key.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @param   {number}                   n   Element index to return.
 * @returns {undefined|number}             Returns undefined or number found at element index.
 */
function getNthElementOfProperty(obj, key, n) {
  if (obj[key] === undefined || !Array.isArray(obj[key]))
    return undefined

  else if (n > obj[key].length)
    return undefined

  else
    return obj[key][n]
}

export { getNthElementOfProperty }
