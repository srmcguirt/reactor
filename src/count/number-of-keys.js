/**
 * Counts the number of keys in an object.
 *
 * @param   {Object<string, any>} obj Object to count keys of.
 * @returns {number}                  Number of keys in the object.
 */
function countNumberOfKeys(obj) {
  /** @type {number} */
  let count = 0

  for (const key in obj) {
    if (key)
      count += 1
  }

  return count
}

export { countNumberOfKeys }
