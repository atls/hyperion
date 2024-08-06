import { AddonProps } from '../addon.interfaces.js'

export const getRoundingStyles = (
  rounding: AddonProps['rounding'],
  position: AddonProps['position']
) => {
  if (position === 'before') {
    return {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: rounding,
      borderTopLeftRadius: rounding,
    }
  }

  return {
    borderBottomRightRadius: rounding,
    borderTopRightRadius: rounding,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  }
}
