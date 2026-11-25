import type { PaginationShape } from './interfaces.js'

import { containerShapes }      from '../../container/styles/shape/variants.js'
import { itemShapes }           from '../../item/styles/shape/variants.js'

export const paginationShapes = {
  default: { container: containerShapes.default, item: itemShapes.default },
} satisfies Record<string, PaginationShape>
