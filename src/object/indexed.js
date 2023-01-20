import { functionUncurryThis } from '../function/uncurry-this'
import { fails } from '../fails'
import { classOfRaw } from '../classof/raw'

const _object = Object
const split = functionUncurryThis(''.split)

const indexedObject = fails(() => {
  // fallback for non-enumerable v8 strings.
  // eslint-disable-next-line no-prototype-builtins
  return !_object('z').propertyIsEnumerable(0)
})
  ? function (/** @type {any} */ input) {
    return classOfRaw(input) === 'String' ? split(input, '') : _object(input)
  }
  : _object

export {
  indexedObject,
}
