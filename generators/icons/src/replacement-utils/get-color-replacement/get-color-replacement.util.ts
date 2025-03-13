import type { GetColorReplacement } from './get-color-replacement.interfaces.js'

export const getColorReplacement: GetColorReplacement = (options) => ({
  [options.color]: `{(props.color && vars.colors${(options.themePaths || []).reduce(
    (str, prop) => `${str}.${prop}`,
    ''
  )}[props.color]) || props.color || "${options.color}"}`,
})
