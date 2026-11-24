import type { MenuShape }  from './interfaces.js'

import { radii }           from '@atls-ui/theme'

import { MENU_MAX_HEIGHT } from './constants.js'
import { MENU_WIDTHS }     from './constants.js'
export const menuShapes: Record<'lg' | 'md' | 'sm', MenuShape> = {
  sm: { width: MENU_WIDTHS.sm, maxHeight: MENU_MAX_HEIGHT, borderRadius: radii.xs2 },
  md: { width: MENU_WIDTHS.md, maxHeight: MENU_MAX_HEIGHT, borderRadius: radii.xs2 },
  lg: { width: MENU_WIDTHS.lg, maxHeight: MENU_MAX_HEIGHT, borderRadius: radii.xs2 },
}
