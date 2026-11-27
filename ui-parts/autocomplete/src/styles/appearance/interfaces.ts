import type { InputAppearanceStates }     from '@atls-ui-parts/input'
import type { InputIndicatorAppearances } from '@atls-ui-parts/input'
import type { ListboxAppearance }         from '@atls-ui-parts/listbox'
import type { OptionAppearances }         from '@atls-ui-parts/listbox'
import type { OptionAppearance }          from '@atls-ui-parts/listbox'
import type { Theme }                     from '@atls-ui/theme'

import type { AutocompleteShape }         from '../shape/interfaces.js'
export interface AutocompleteAppearance {
  input: InputAppearanceStates
  indicator: InputIndicatorAppearances
  menu: ListboxAppearance
  option: OptionAppearances
  message: OptionAppearance
}
export type AutocompleteAppearanceVariant = (
  theme: Theme,
  shape: AutocompleteShape
) => AutocompleteAppearance
