import { borderWidths } from '@atls-ui/theme/tokens'
import { spacing }      from '@atls-ui/theme/tokens'

export const switchShapeSizes = {
  sm: {
    thumbSize: '8px',
    width: '24px',
  },
  md: {
    thumbSize: '10px',
    width: '30px',
  },
  lg: {
    thumbSize: '12px',
    width: '36px',
  },
} as const

export const switchThumbWidth = '1px'
export const switchThumbHalfWidth = '0.5px'

export const resolveSwitchThumbOffset = (width: string): string =>
  `calc(${width} - ${spacing.component.xs2} - ${spacing.component.xs2} - ${borderWidths.xs} - ${borderWidths.xs})`
