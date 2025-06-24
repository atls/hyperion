import type { GetColorReplacement } from './get-color-replacement.interfaces.js'

export const getColorReplacement: GetColorReplacement = (options) => ({
  [options.color]: `currentColor`,
})
