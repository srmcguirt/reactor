// https://tc39.es/ecma262/#sec-tointegerorinfinity
/**
 * Takes an argument and returns either a normal completion containing an
 * integer, pos Infinity, neg Infinity, or a throw if NaN, +0, or -0.
 *
 * @param   {*}      argument Argument under evaluation.
 * @returns {number}          Truncated number.
 */
export const toIntOrInf = (argument) => {
  const number = +argument
  return typeof number !== 'number' || number === 0 ? 0 : Math.trunc(number)
}
