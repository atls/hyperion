import type { Elevation }     from '../interfaces.js'
import type { ShadowOptions } from '../interfaces.js'

import { shadowOffsets }      from '../offsets.js'
import { shadowSpreads }      from '../spreads.js'

export const createElevation = (...shadows: Array<ShadowOptions>): Elevation =>
  shadows
    .map(
      ({
        color,
        offsetX = shadowOffsets.none,
        offsetY,
        blur,
        spread = shadowSpreads.none,
        inset = false,
      }) => `${inset ? 'inset ' : ''}${offsetX} ${offsetY} ${blur} ${spread} ${color}`
    )
    .join(', ')
