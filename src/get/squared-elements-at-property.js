/**
 * Given an object, return an array containing all the squared elements at the given key.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {[]|number[]}                  Returns empty or squared elements in an array.
 */
function getSquaredElementsAtProperty(obj, key) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return []
  // no magic numbers
  const squared = 2
  return obj[key].map(v => v ** squared)
}

export { getSquaredElementsAtProperty }
