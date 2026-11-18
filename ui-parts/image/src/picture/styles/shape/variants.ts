import type { PictureShape } from './interfaces.js'
export const pictureShapes = {
  default: { objectFit: 'cover', objectPosition: 'center' },
} satisfies Record<string, PictureShape>
