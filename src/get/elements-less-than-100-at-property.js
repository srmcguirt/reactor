/**
 * Given an object and key, return elements less than 100.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {Array<any | number>}          Return empty or number array.
 */
function getElementsLessThan100AtProperty(obj, key) {
  let filterArray = []
  // if array is empty, return empty
  if (obj[key] === undefined)
    return []

  else if (!Array.isArray(obj[key]))
    return []

  else if (!(typeof obj[key] !== 'number'))
    return []

  else
    filterArray = obj[key].filter(v => v < 100)

  return filterArray
}

export { getElementsLessThan100AtProperty }
