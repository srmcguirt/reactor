/**
 * Given an object, remove any props that have values that are strings.
 *
 * @param   {Object<string, any>} object Source object.
 * @returns {Object<string, any>}        Object with string values removed.
 */
function removeStringValues(object) {
  for (const key in object) {
    if (typeof object[key] === 'string')
      delete object[key]
  }

  return object
}

export { removeStringValues }
