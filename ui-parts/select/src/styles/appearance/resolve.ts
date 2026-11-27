import type { Theme }            from '@atls-ui/theme'

import type { SelectShape }      from '../shape/interfaces.js'
import type { SelectAppearance } from './interfaces.js'

import { selectAppearances }     from './variants.js'
export const resolveSelectAppearance = (
  appearance: SelectAppearance | keyof typeof selectAppearances,
  theme: Theme,
  shape: SelectShape
): SelectAppearance =>
  typeof appearance === 'string' ? selectAppearances[appearance](theme, shape) : appearance
