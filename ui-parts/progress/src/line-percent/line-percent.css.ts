import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { vars }                   from '@atls-ui-parts/theme'
import { colorProperties }        from '@atls-ui-parts/theme/properties'

export const baseLinePercentStyles = style({
  display: 'flex',
  position: 'absolute',
  height: '100%',
  transition: 'all 0.3s linear',
})

export const roundLinePercentStyles = style({
  borderRadius: vars.radii.full,
})

export const squareLinePercentStyles = style({
  borderRadius: vars.radii.none,
})

export const linePercentSprinkles = createRainbowSprinkles(colorProperties)

export type LinePercentSprinkles = Parameters<typeof linePercentSprinkles>[0]
