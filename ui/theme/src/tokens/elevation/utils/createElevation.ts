import type { Elevation }     from '../interfaces.js'
import type { ShadowOptions } from '../interfaces.js'

import { shadowOffsets }      from '../offsets.js'

export const createElevation = (...shadows: Array<ShadowOptions>): Elevation =>
  shadows
    .filter(({ inset }) => !inset)
    .map(
      ({ color, offsetX = shadowOffsets.none, offsetY, blur }) =>
        `drop-shadow(${offsetX} ${offsetY} ${Number.parseFloat(blur) / 2}px ${color})`
    )
    .join(' ')
