import type { ContainerShape } from './interfaces.js'

import { radii }               from '@atls-ui/theme/tokens'

import { IMAGE_SIZE }          from './constants.js'
export const containerShapes = {
  default: { width: IMAGE_SIZE, height: IMAGE_SIZE, radius: radii.none },
} satisfies Record<string, ContainerShape>
