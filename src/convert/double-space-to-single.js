/**
 * Convert double space to single.
 *
 * @param   {string} str The string to convert.
 * @returns {string}     The converted string.
 */
function convertDoubleSpaceToSingle(str) {
  /** @constant {string[]} */
  const stringArr = str.split('  ')
  return stringArr.join(' ')
}

export { convertDoubleSpaceToSingle }
