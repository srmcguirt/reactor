/**
 * Check for failure, catch error.
 *
 * @param   {Function|*} exec
 * @returns {Error|*}
 */
export const fails = (exec) => {
  try {
    return !!exec()
  }
  catch (error) {
    return true
  }
}
