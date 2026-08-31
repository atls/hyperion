import type { CSSProperties }          from 'react'

import type { Theme }                  from '@atls-ui/theme'

import type { ButtonAppearanceStates } from './appearance/interfaces.js'
import type { ButtonColors }           from './appearance/interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'

import { appearanceVariables }         from './appearance/styles.css.js'
import { buttonShapes }                from './shape/variants.css.js'
import { elevationVariables }          from './shape/variants.css.js'

type ButtonElevationName = 'lg' | 'md' | 'sm' | 'xs'

const elevationNames: Partial<Record<string, ButtonElevationName>> = {
  [buttonShapes.xs]: 'xs',
  [buttonShapes.sm]: 'sm',
  [buttonShapes.md]: 'md',
  [buttonShapes.lg]: 'lg',
}

const resolveElevation = (elevation: string, colors: ButtonColors): string =>
  colors.background === 'transparent' && colors.border === 'transparent' ? 'none' : elevation

export const assignButtonVariables = (
  appearance: ButtonAppearanceStates,
  shape: string,
  theme: Theme,
  style?: CSSProperties
): CSSProperties => {
  const elevationName = elevationNames[shape]
  const elevations = elevationName ? theme.elevations[elevationName] : undefined

  return {
    ...assignInlineVars(appearanceVariables, appearance),
    ...(elevations &&
      assignInlineVars(elevationVariables, {
        default: resolveElevation(elevations.default, appearance.default),
        hover: resolveElevation(elevations.hover, appearance.hover),
        pressed: resolveElevation(elevations.pressed, appearance.pressed),
        disabled: resolveElevation(elevations.disabled, appearance.disabled),
        focused: resolveElevation(elevations.disabled, appearance.focused),
      })),
    ...style,
  }
}
