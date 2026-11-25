import type { Theme }                   from '@atls-ui/theme'

import type { IndicatorAppearance }     from './interfaces.js'

import { GRADIENT_OFFSETS }             from './constants.js'
import { PAINT_SPAN }                   from './constants.js'
import { paginationAnimationVariables } from '../animation/variables.css.js'

export const indicatorAppearances = {
  default: (theme: Theme): IndicatorAppearance => {
    const weight = `calc((1 + ${paginationAnimationVariables.direction}) * 50%)`
    const start = `color-mix(in srgb, ${theme.colors.action.base} ${weight}, ${theme.colors.action.pressed})`
    const end = `color-mix(in srgb, ${theme.colors.action.pressed} ${weight}, ${theme.colors.action.base})`
    return {
      borderColor: theme.colors.action.base,
      background: `linear-gradient(to right,
        ${theme.colors.action.subtle} calc(${paginationAnimationVariables.distance} - ${GRADIENT_OFFSETS.start}),
        ${start} calc(${paginationAnimationVariables.distance} - ${GRADIENT_OFFSETS.activeStart}),
        ${end} calc(${paginationAnimationVariables.distance} + ${GRADIENT_OFFSETS.activeEnd}),
        ${theme.colors.action.subtle} calc(${paginationAnimationVariables.distance} + ${GRADIENT_OFFSETS.end})
      ) calc(-1 * ${paginationAnimationVariables.distance}) 0 / calc(100cqw + ${paginationAnimationVariables.distance} * ${PAINT_SPAN}) 100% no-repeat`,
    }
  },
}
