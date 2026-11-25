import type { ListboxShape } from './interfaces.js'

import { MENU_MAX_HEIGHT }   from './constants.js'
import { MENU_WIDTHS }       from './constants.js'
import { listboxBoxShapes }  from '../../box/styles/shape/variants.js'
export const listboxShapes: Record<'lg' | 'md' | 'sm', ListboxShape> = {
  sm: {
    width: MENU_WIDTHS.sm,
    maxHeight: MENU_MAX_HEIGHT,
    ...listboxBoxShapes.default,
    statusWidth: 'max-content',
  },
  md: {
    width: MENU_WIDTHS.md,
    maxHeight: MENU_MAX_HEIGHT,
    ...listboxBoxShapes.default,
    statusWidth: 'max-content',
  },
  lg: {
    width: MENU_WIDTHS.lg,
    maxHeight: MENU_MAX_HEIGHT,
    ...listboxBoxShapes.default,
    statusWidth: 'max-content',
  },
}
