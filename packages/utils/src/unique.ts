/* eslint-disable no-return-assign */
let lastId = 0

export const unique = (prefix = 'id') => `${prefix}${(lastId += 1)}`
