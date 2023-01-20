// https:// tc39.es/ecma262/#sec-toobject
import { requireObjectCoercible } from '../require/object-coercible'
const _object = Object

/**
 * Convert to object after checking for null/undef case.
 *
 * @param   {*}      argument Argument coerced.
 * @returns {object}
 */
export const toObject = argument => _object(requireObjectCoercible(argument))
