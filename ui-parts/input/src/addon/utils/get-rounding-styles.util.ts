import type { AddonProps }              from '../addon.interfaces.js'
import type { GetRoundingStylesReturn } from './get-rounding-styles.interfaces.js'

export const getRoundingStyles = (
  rounding: AddonProps['rounding'],
  position: AddonProps['position']
): GetRoundingStylesReturn => {
  if (position === 'before') {
    return {
      borderBottomRightRadius: '0',
      borderTopRightRadius: '0',
      borderBottomLeftRadius: rounding,
      borderTopLeftRadius: rounding,
    }
  }

  return {
    borderBottomRightRadius: rounding,
    borderTopRightRadius: rounding,
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
  }
}
