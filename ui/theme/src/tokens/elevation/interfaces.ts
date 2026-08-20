import type { Properties }    from 'csstype'

import type { shadowBlurs }   from './blurs.js'
import type { shadowOffsets } from './offsets.js'
import type { shadowSpreads } from './spreads.js'

export type Elevation = NonNullable<Properties['boxShadow']>
export type ShadowBlur = (typeof shadowBlurs)[keyof typeof shadowBlurs]
export type ShadowOffset = (typeof shadowOffsets)[keyof typeof shadowOffsets]
export type ShadowSpread = (typeof shadowSpreads)[keyof typeof shadowSpreads]

export interface ShadowOptions {
  color: string
  offsetX?: ShadowOffset
  offsetY: ShadowOffset
  blur: ShadowBlur
  spread?: ShadowSpread
  inset?: boolean
}

export interface ElevationStates {
  default: Elevation
}

export interface PressableElevationStates extends ElevationStates {
  hover: Elevation
  pressed: Elevation
  disabled: Elevation
}

export interface ElevationsTokens {
  xs: PressableElevationStates
  sm: PressableElevationStates
  md: PressableElevationStates
  lg: PressableElevationStates
  modal: ElevationStates
}

