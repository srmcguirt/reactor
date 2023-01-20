import { functionUncurryThis } from '../function/uncurry-this'

const toString = functionUncurryThis({}.toString)
const stringSlice = functionUncurryThis(''.slice)

/**
 * Check for raw input.
 *
 * @param   {any} input
 * @returns {any}
 */
function classOfRaw(input) {
  return stringSlice(toString(input), 8, -1)
}

console.log(toString([1, 2, 3]))

export { classOfRaw }
