/**
 * Given an object and key, return the average of all elements in the array located at the key.
 *
 * @param   {Object<string,number[]>} obj Input object.
 * @param   {string}                  key Input key.
 * @returns {number}                      Return 0 or average.
 */
function getAverageOfElementsAtProperty(obj, key) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return 0

  const sum = obj[key].reduce((prev, curr) => prev += curr)
  return sum / (obj[key].length)
}

export { getAverageOfElementsAtProperty }
