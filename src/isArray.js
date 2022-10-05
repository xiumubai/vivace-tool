import { getTypeOf } from './getTypeOf'

export const isArray = (target) => {
  return Array.isArray(target) && getTypeOf(target) === 'array'
}
