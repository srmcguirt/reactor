import { toIntOrInf } from './int-or-inf'
const infinityConstant = (2 ** 53) - 1
/**
 * Takes an argument and returns either a normal completion containing an
 * integral Number or a throw completion.
 *
 * @description It clamps argument to an integral Number suitable for use as
 * the length of an array-like object.
 * @param   {*}      argument Argument under evaluation.
 * @returns {number}          Length of an array-like object.
 */
export function toLength(argument) {
  const len = toIntOrInf(argument)
  if (len <= 0)
    return 0

  else
    return Math.min(len, infinityConstant)
}
