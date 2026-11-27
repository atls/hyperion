import type { Theme }                from '@atls-ui/theme'

import type { PaginationProps }      from '../../interfaces.js'
import type { PaginationAppearance } from './interfaces.js'

import { paginationAppearances }     from './variants.js'

export const resolvePaginationAppearance = (
  appearance: NonNullable<PaginationProps['appearance']>,
  theme: Theme
): PaginationAppearance =>
  typeof appearance === 'string' ? paginationAppearances[appearance](theme) : appearance
