import { ignoredColorAttributeValues } from '../../icons.constants.js'

export const validateColor = (color: string): boolean => {
  if (!color || ignoredColorAttributeValues.has(color)) {
    return false
  }

  return true
}
