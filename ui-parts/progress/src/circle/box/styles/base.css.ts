import { createVar }   from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

import { boxRadius }   from './shape/variables.css.js'
import { radiusInput } from './shape/variables.css.js'
export const boxBackground = createVar()
export const boxShadow = createVar()
const radius = `min(${boxRadius}, 50%) / min(${boxRadius}, 50%)`
export const boxStyles = style({
  gridArea: '1 / 1',
  position: 'relative',
  isolation: 'isolate',
  display: 'grid',
  placeItems: 'center',
  minWidth: 0,
  minHeight: 0,
  boxSizing: 'border-box',
})
export const surfaceStyles = style({
  position: 'absolute',
  inset: 0,
  containerType: 'size',
  zIndex: -1,
  pointerEvents: 'none',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      vars: { [boxRadius]: radiusInput },
      borderRadius: radius,
      boxShadow,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      vars: { [boxRadius]: radiusInput },
      clipPath: `inset(0 round ${radius})`,
      backgroundColor: boxBackground,
    },
  },
})
