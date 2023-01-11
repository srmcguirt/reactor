/**
 * Given an object and key, return an array containing all elements at the key that
 * are equal to ten.
 *
 * @param   {Object<string,number[]>} obj Input object.
 * @param   {string}                  key Input key of object.
 * @returns {Array<any>}                  Return properties equal 10.
 */
function getElementsThatEqual10AtProperty(obj, key) {
  // if array is empty, return empty
  const emptyArray = obj[key] === undefined || !obj[key].length
  // if the prop at key is not an array, return empty
  const keyNotArray = !Array.isArray(obj[key])
  // if there is no prop at the key, return empty
  const noPropAtKeys = obj.key !== undefined

  let filterArray = []
  if (emptyArray || keyNotArray || noPropAtKeys)
    return []

  else
    filterArray = obj[key].filter(v => v === 10)

  return filterArray
}

export { getElementsThatEqual10AtProperty }
