import { getTypeOf } from './getTypeOf'

export const isNumber = (target) => {
  return typeof target === 'number' && getTypeOf(target) === 'number'
}
