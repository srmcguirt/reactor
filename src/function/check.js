/**
 * Polyfill function check for callable or typeof.
 *
 * @param   {*}       test
 * @returns {boolean}
 */
export const functionCheck = test =>
  typeof test != 'function'
  || Object.prototype.hasOwnProperty.call(test, 'prototype')
