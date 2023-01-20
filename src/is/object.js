import { isCallable } from './callable'

/**
 * Evaluate item for object value.
 *
 * @param   {*}       item Item under evaluation.
 * @returns {boolean}
 */
export function isObject(item) {
  return typeof item === 'object' ? item !== null : isCallable(item)
}
