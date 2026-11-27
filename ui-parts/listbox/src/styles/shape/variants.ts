import type { ListboxShape }  from './interfaces.js'

import { radii }              from '@atls-ui/theme'

import { LISTBOX_MAX_HEIGHT } from './constants.js'
import { LISTBOX_WIDTHS }     from './constants.js'
export const listboxShapes: Record<'lg' | 'md' | 'sm', ListboxShape> = {
  sm: { width: LISTBOX_WIDTHS.sm, maxHeight: LISTBOX_MAX_HEIGHT, borderRadius: radii.xs2 },
  md: { width: LISTBOX_WIDTHS.md, maxHeight: LISTBOX_MAX_HEIGHT, borderRadius: radii.xs2 },
  lg: { width: LISTBOX_WIDTHS.lg, maxHeight: LISTBOX_MAX_HEIGHT, borderRadius: radii.xs2 },
}
