/* eslint-disable jsdoc/require-returns */
import { classOfRaw } from '../classof/raw'
import { functionUncurryThis } from './uncurry-this'

/**
 * @param {any} fn
 */
export function functionUncurryThisClause(fn) {
  // Nashorn bug
  return (classOfRaw(fn) === 'Function') ? functionUncurryThis(fn) : undefined
}
