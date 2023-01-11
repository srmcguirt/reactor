/**
 * Given an object, return an array containing all but the last element at given key.
 *
 * @param   {Object<string, number[]>} obj Input array.
 * @param   {string}                   key Input key.
 * @returns {[]|number[]}                  Returns empty or number array.
 */
function getAllButLastElementOfProperty(obj, key) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return []

  const result = []

  for (let i = 0; i < obj[key].length - 1; i++)
    result[i] = obj[key][i]

  return result
}

export { getAllButLastElementOfProperty }
