import type { AvatarShape } from './interfaces.js'

import { boxShapes }        from '../../box/styles/shape/variants.js'
import { fallbackShapes }   from '../../fallback/styles/shape/variants.js'
import { imageShapes }      from '../../image/styles/shape/variants.js'
import { loadingShapes }    from '../../loading/styles/shape/variants.js'
export const avatarShapes = {
  xs: {
    box: boxShapes.xs,
    image: imageShapes.default,
    fallback: fallbackShapes.xs,
    loading: loadingShapes.xs,
  },
  sm: {
    box: boxShapes.sm,
    image: imageShapes.default,
    fallback: fallbackShapes.sm,
    loading: loadingShapes.sm,
  },
  md: {
    box: boxShapes.md,
    image: imageShapes.default,
    fallback: fallbackShapes.md,
    loading: loadingShapes.md,
  },
  lg: {
    box: boxShapes.lg,
    image: imageShapes.default,
    fallback: fallbackShapes.lg,
    loading: loadingShapes.lg,
  },
} satisfies Record<string, AvatarShape>
