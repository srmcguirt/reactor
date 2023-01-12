/**
 * Given an object, return the product of all the elements at the given key.
 *
 * @param   {Object<string, number[]>} obj Input object array.
 * @param   {string}                   key Input key.
 * @returns {number}                       Returns zero or product.
 */
function getProductOfAllElementsAtProperty(obj, key) {
  let product = 1

  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  ) {
    return 0
  }
  else {
    for (let i = 0; i < obj[key].length; i++)
      product *= obj[key][i]
  }

  return product
}

export { getProductOfAllElementsAtProperty }
