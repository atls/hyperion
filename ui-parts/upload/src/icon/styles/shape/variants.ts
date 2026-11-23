import type { IconShape } from './interfaces.js'

import { ICON_SIZE }      from './constants.js'
export const iconShapes = { default: { size: ICON_SIZE } } satisfies Record<string, IconShape>
