import { style }                     from '@vanilla-extract/css'

import { borderStyles }              from '@atls-ui/theme/tokens'
import { radii }                     from '@atls-ui/theme/tokens'

import { switchThumbRotations }      from './constants.js'
import { switchTransitionDurations } from './constants.js'
import { switchThumbHalfWidth }      from './shape/constants.js'
import { switchThumbWidth }          from './shape/constants.js'
import { thumbOffsetVariable }       from './shape/variants.css.js'
import { thumbSizeVariable }         from './shape/variants.css.js'

const thumbBaseStyles = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  marginInlineEnd: 'auto',
  transformOrigin: 'center',
  pointerEvents: 'none',
  transitionDuration: switchTransitionDurations.default,
  transitionProperty: 'color, transform',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: switchTransitionDurations.reducedMotion,
    },
  },
})

export const baseStyles = style({
  appearance: 'none',
  position: 'relative',
  display: 'inline-flex',
  boxSizing: 'border-box',
  margin: 0,
  verticalAlign: 'middle',
  borderStyle: borderStyles.solid,
  outline: 'none',
  cursor: 'pointer',
  transitionDuration: switchTransitionDurations.default,
  transitionProperty: 'background-color, border-color, box-shadow',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: switchTransitionDurations.reducedMotion,
    },
  },
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

export const thumbStyles = style([
  thumbBaseStyles,
  {
    width: switchThumbWidth,
    height: thumbSizeVariable,
    borderRadius: radii.full,
    background: 'currentColor',
    transform: `translateX(-${switchThumbHalfWidth}) rotate(${switchThumbRotations.unchecked})`,
  },
])

export const checkedThumbStyles = style({
  transform: `translateX(calc(${thumbOffsetVariable} - ${switchThumbHalfWidth})) rotate(${switchThumbRotations.checked})`,
})

export const customThumbStyles = style([
  thumbBaseStyles,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: thumbSizeVariable,
    height: thumbSizeVariable,
    transform: `rotate(${switchThumbRotations.unchecked})`,
  },
])

export const checkedCustomThumbStyles = style({
  transform: `translateX(calc(${thumbOffsetVariable} - ${thumbSizeVariable})) rotate(${switchThumbRotations.checked})`,
})
