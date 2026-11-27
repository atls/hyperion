import type { Theme }                  from '@atls-ui/theme'

import type { AutocompleteShape }      from '../shape/interfaces.js'
import type { AutocompleteAppearance } from './interfaces.js'

import { autocompleteAppearances }     from './variants.js'
export const resolveAutocompleteAppearance = (
  appearance: AutocompleteAppearance | keyof typeof autocompleteAppearances,
  theme: Theme,
  shape: AutocompleteShape
): AutocompleteAppearance =>
  typeof appearance === 'string' ? autocompleteAppearances[appearance](theme, shape) : appearance
