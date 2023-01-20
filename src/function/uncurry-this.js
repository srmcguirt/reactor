/**
 * Uncurry the argument functions.
 *
 * @param   {Function} fn
 * @returns {Function}
 */
export const functionUncurryThis = (fn) => {
  return function (/** @type {any[]} */ ...args) {
    return args.reduce((fn, arg) => fn(arg), fn)
  }
}
