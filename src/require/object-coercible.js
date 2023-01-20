// https://tc39.es/ecma262/#sec-requireobjectcoercible
import { isNullOrUndefined } from '../is/null-or-undefined'
/** @constant {Error} */
const _typeError = TypeError

/**
 * Require object to be defined.
 *
 * @param   {*}                         item Item under evaluation.
 * @returns {null | undefined | object}
 * @throws  {TypeError}                      If null or undefined.
 */
export function requireObjectCoercible(item) {
  if (isNullOrUndefined(item))
    throw _typeError(`Unable to call, ${item}, is null or undefined.`)

  return item
}
