/**
 * Add props from second object to first without overwrite.
 *
 * @param   {Object<string, any>} object1 Object to add props to.
 * @param   {Object<string, any>} object2 Object to add props from.
 * @returns {Object<string, any>}         Object with added props.
 * @example
 *  var obj1 = {
 *    a: 1,
 *    b: 2
 *  };
 *  var obj2 = {
 *    b: 4,
 *    c: 3
 *  };
 *
 *  extend(obj1, obj2)
 */
function extend(object1, object2) {
  /**
   * @constant {*}
   */
  for (const key in object2) {
    if (object1[key] === undefined)
      object1[key] = object2[key]

    else if (object1[key] === object2[key])
      continue
  }

  return object1
}

export { extend }
