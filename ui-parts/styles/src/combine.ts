import { styleFn } from 'styled-system'

export const combine = (...funcs): styleFn =>
  (...args) =>
    Object.assign({}, ...funcs.map((func) => func(...args)))
