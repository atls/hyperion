import { style }               from '@vanilla-extract/css'

import { borderStyles }        from '@atls-ui/theme/tokens'
import { radii }               from '@atls-ui/theme/tokens'

import { switchThumbWidth }    from './shape/constants.js'
import { thumbOffsetVariable } from './shape/variants.css.js'
import { thumbSizeVariable }   from './shape/variants.css.js'

const switchTransitionDuration = '300ms'

const thumbBaseStyles = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  marginInlineEnd: 'auto',
  transformOrigin: 'center',
  pointerEvents: 'none',
  transitionDuration: switchTransitionDuration,
  transitionProperty: 'color, transform',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: '0.01ms',
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
  transitionDuration: switchTransitionDuration,
  transitionProperty: 'background-color, border-color, box-shadow',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: '0.01ms',
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
    transform: 'translateX(-0.5px) rotate(0deg)',
  },
])

export const checkedThumbStyles = style({
  transform: `translateX(calc(${thumbOffsetVariable} - 0.5px)) rotate(180deg)`,
})

export const customThumbStyles = style([
  thumbBaseStyles,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: thumbSizeVariable,
    height: thumbSizeVariable,
    transform: 'rotate(0deg)',
  },
])

export const checkedCustomThumbStyles = style({
  transform: `translateX(calc(${thumbOffsetVariable} - ${thumbSizeVariable})) rotate(180deg)`,
})
