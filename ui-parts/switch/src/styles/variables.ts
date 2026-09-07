import type { Theme }                  from '@atls-ui/theme'
import type { CSSProperties }          from 'react'

import type { SwitchAppearanceValues } from './appearance/interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'

import { appearanceVariables }         from './appearance/styles.css.js'
import { elevationVariable }           from './shape/variants.css.js'
import { switchShapes }                from './shape/variants.css.js'

type SwitchElevationName = 'lg' | 'md' | 'sm'

const elevationNames: Partial<Record<string, SwitchElevationName>> = {
  [switchShapes.sm]: 'sm',
  [switchShapes.md]: 'md',
  [switchShapes.lg]: 'lg',
}

export const assignSwitchVariables = (
  appearance: SwitchAppearanceValues,
  checked: boolean,
  shape: string,
  theme: Theme,
  style?: CSSProperties
): CSSProperties => {
  const elevationName = elevationNames[shape]
  const elevation = elevationName ? theme.elevations[elevationName].pressed : undefined
  const colors = checked ? appearance.on : appearance.off

  return {
    ...assignInlineVars(appearanceVariables, colors),
    ...(elevation && assignInlineVars({ elevationVariable }, { elevationVariable: elevation })),
    ...style,
  }
}
