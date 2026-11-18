import type { ImageShape } from './interfaces.js'
export const imageShapes = {
  default: { objectFit: 'cover', objectPosition: 'center' },
} satisfies Record<string, ImageShape>
