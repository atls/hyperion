import type { GetSvgColorsOptions } from './get-svg-colors.interfaces.js'

export const validateColor = (color: string, options: GetSvgColorsOptions): boolean => {
  if (!color) {
    return false
  }

  if (options.ignoredColorAttributeValues?.has(color)) {
    return false
  }

  return true
}
