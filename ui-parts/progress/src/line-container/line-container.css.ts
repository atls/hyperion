import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { vars }                   from '@atls-ui-parts/theme'
import { colorProperties }        from '@atls-ui-parts/theme/properties'
import { layoutProperties }       from '@atls-ui-parts/theme/properties'

export const baseLineContainerStyles = style({
  display: 'flex',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
})

export const roundLineContainerStyles = style({
  borderRadius: vars.radii.full,
})

export const squareLineContainerStyles = style({
  borderRadius: vars.radii.none,
})

export const lineContainerSprinkles = createRainbowSprinkles(colorProperties, layoutProperties)

export type LineContainerSprinkles = Parameters<typeof lineContainerSprinkles>[0]
