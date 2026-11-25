import { style }                        from '@vanilla-extract/css'
import { createVar }                    from '@vanilla-extract/css'

import { opacity }                      from '@atls-ui/theme/tokens'
import { animations }                   from '@atls-ui/theme/tokens'
import { spacing }                      from '@atls-ui/theme/tokens'
import { borderWidths }                 from '@atls-ui/theme/tokens'
import { borderStyles }                 from '@atls-ui/theme/tokens'

import { itemStyles }                   from '../item/styles/base.css.js'
import { paginationAnimationVariables } from './animation/variables.css.js'
import { borderShapeOpacity }           from './animation/variables.css.js'

export const travelDirection = createVar()

export const indicatorStyles = style({
  containerType: 'size',
  left: spacing.component.none,
  pointerEvents: 'none',
  position: 'absolute',
  width: '100%',
  vars: {
    [paginationAnimationVariables.direction]: travelDirection,
    [borderShapeOpacity]: String(opacity.none),
  },
  '@supports': {
    '(border-shape: circle(50%))': { vars: { [borderShapeOpacity]: String(opacity.full) } },
  },
  selectors: {
    [`${itemStyles}:disabled &`]: { visibility: 'hidden' },
    '&:dir(rtl)': {
      vars: { [paginationAnimationVariables.direction]: `calc(-1 * ${travelDirection})` },
    },
  },
})

export const layerStyles = style({
  boxSizing: 'border-box',
  borderWidth: borderWidths.none,
  borderStyle: borderStyles.solid,
  animationFillMode: 'both',
  borderRadius: 'inherit',
  display: 'block',
  height: '100%',
  left: spacing.component.none,
  opacity: opacity.none,
  position: 'absolute',
  width: '100%',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      display: 'none',
      animationDuration: `${animations.duration.none} !important`,
    },
  },
})
