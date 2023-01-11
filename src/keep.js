/**
 * Given an array, return an array containing the items that match the given keep filter.
 *
 * @param   {number[]}       array Input array.
 * @param   {number}         keep  Array match filter.
 * @returns {any[]|number[]}       Filtered matches.
 */
function keep(array, keep) {
  if (!Array.isArray(array))
    return []

  return array.filter(v => v === keep)
}

export { keep }
