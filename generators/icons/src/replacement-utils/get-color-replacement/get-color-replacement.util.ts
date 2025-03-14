import type { GetColorReplacement } from './get-color-replacement.interfaces.js'

export const getColorReplacement: GetColorReplacement = (options) => ({
  [options.color]: `{(color && vars.colors${(options.themePaths || []).reduce(
    (str, prop) => `${str}.${prop}`,
    ''
  )}[color]) || color || "${options.color}"}`,
})
