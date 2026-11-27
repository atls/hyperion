import type { PaginationAnimation }     from './interfaces.js'

import { animations }                   from '@atls-ui/theme/tokens'

import { flowShapes }                   from './flow.css.js'
import { flowParameters }               from './flow.css.js'
import { flow }                         from './keyframes.css.js'
import { paint }                        from './keyframes.css.js'
import { separateBorders }              from './keyframes.css.js'
import { joinedBorder }                 from './keyframes.css.js'
import { hideSurface }                  from './keyframes.css.js'
import { paginationAnimationVariables } from './variables.css.js'

const timing = {
  animationDuration: `${animations.loopDuration.sm}ms`,
  animationTimingFunction: animations.easing.linear,
  animationFillMode: 'none',
} as const
const canvas = {
  ...timing,
  width: `calc(100cqw + ${paginationAnimationVariables.distance} + 100cqw)`,
  transform: `scaleX(${paginationAnimationVariables.direction})`,
  transformOrigin: '50cqw center',
  backgroundOrigin: 'border-box',
  backgroundClip: 'border-box',
} as const
const border = { ...canvas, background: 'none', animationName: `${flow}, ${separateBorders}` }
const surface = { ...timing, animationName: hideSurface }

export const paginationAnimations = {
  flow: {
    enter: {},
    leave: {
      ink: { ...canvas, animationName: `${flow}, ${paint}`, clipPath: flowShapes.fill },
      fromBorder: {
        ...border,
        clipPath: flowShapes.left,
        borderShape: `${flowShapes.left} border-box`,
        boxShadow: `inset 0 0 0 calc(${paginationAnimationVariables.borderWidth} * ${flowParameters.leftWeight}) currentColor`,
      },
      toBorder: {
        ...border,
        clipPath: flowShapes.right,
        borderShape: `${flowShapes.right} border-box`,
        boxShadow: `inset 0 0 0 calc(${paginationAnimationVariables.borderWidth} * ${flowParameters.rightWeight}) currentColor`,
      },
      joinedBorder: {
        ...border,
        animationName: `${flow}, ${joinedBorder}`,
        clipPath: flowShapes.joined,
        borderShape: `${flowShapes.joined} border-box`,
        boxShadow: `inset 0 0 0 calc(${paginationAnimationVariables.borderWidth} * ${flowParameters.joinedWeight}) currentColor`,
      },
    },
    surface: { enter: surface, leave: surface },
  },
} satisfies Record<string, PaginationAnimation>
