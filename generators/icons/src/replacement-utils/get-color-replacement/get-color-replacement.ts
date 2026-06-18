import type { GetColorReplacement } from './interfaces.js'

export const getColorReplacement: GetColorReplacement = (options) => ({
  [options.color]: `currentColor`,
})
