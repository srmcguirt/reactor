import { fails } from '../fails'
/**
 * Polyfill Native Bind from Core-js.
 *
 * @param   {*}       test
 * @returns {boolean}
 */
const checkFunctionNativeBind = test =>
  typeof test != 'function' || Object.prototype.hasOwnProperty.call(test, 'prototype')

export const functionNativeBind = !fails(checkFunctionNativeBind)
