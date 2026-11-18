import type { ImageShape } from './interfaces.js'

import { containerShapes } from '../../container/styles/shape/variants.js'
import { fallbackShapes }  from '../../fallback/styles/shape/variants.js'
import { loadingShapes }   from '../../loading/styles/shape/variants.js'
import { pictureShapes }   from '../../picture/styles/shape/variants.js'
export const imageShapes = {
  default: {
    container: containerShapes.default,
    picture: pictureShapes.default,
    fallback: fallbackShapes.default,
    loading: loadingShapes.default,
  },
} satisfies Record<string, ImageShape>
