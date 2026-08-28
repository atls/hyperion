import type { Theme }                 from '@atls-ui/theme'
import type { CSSProperties }         from 'react'

import type { InputAppearanceStates } from './appearance/interfaces.js'
import type { InputElevation }        from './appearance/interfaces.js'
import type { InputVisualState }      from './appearance/interfaces.js'

import { assignInlineVars }           from '@vanilla-extract/dynamic'

import { appearanceVariables }        from './appearance/styles.css.js'
import { inputShapes }                from './shape/variants.css.js'

type InputElevationName = 'lg' | 'md' | 'sm'

const elevationNames: Partial<Record<string, InputElevationName>> = {
  [inputShapes.sm]: 'sm',
  [inputShapes.md]: 'md',
  [inputShapes.lg]: 'lg',
}

const resolveShadow = (
  elevation: InputElevation,
  theme: Theme,
  elevationName?: InputElevationName
): string => {
  if (elevation === 'none' || !elevationName) {
    return 'none'
  }

  return theme.elevations[elevationName][elevation]
}

const resolveState = (
  state: InputVisualState,
  theme: Theme,
  elevationName?: InputElevationName
) => ({
  background: state.background,
  border: state.border,
  content: state.content,
  shadow: resolveShadow(state.elevation, theme, elevationName),
})

export const assignInputVariables = (
  appearance: InputAppearanceStates,
  shape: string,
  theme: Theme,
  style?: CSSProperties
): CSSProperties => {
  const elevationName = elevationNames[shape]

  return {
    ...assignInlineVars(appearanceVariables, {
      disabled: resolveState(appearance.disabled, theme, elevationName),
      error: resolveState(appearance.error, theme, elevationName),
      filled: resolveState(appearance.filled, theme, elevationName),
      focused: resolveState(appearance.focused, theme, elevationName),
      hover: resolveState(appearance.hover, theme, elevationName),
      unfilled: resolveState(appearance.unfilled, theme, elevationName),
    }),
    ...style,
  }
}
