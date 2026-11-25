import type { InputIndicatorAppearances } from '@atls-ui-parts/input'
import type { InputValueAppearances }     from '@atls-ui-parts/input'
import type { ListboxAppearance }         from '@atls-ui-parts/listbox'
import type { OptionAppearances }         from '@atls-ui-parts/listbox'
import type { Theme }                     from '@atls-ui/theme'

import type { TriggerAppearances }        from '../../trigger/styles/appearance/interfaces.js'
import type { SelectShape }               from '../shape/interfaces.js'
export interface SelectAppearance {
  trigger: TriggerAppearances
  value: InputValueAppearances
  indicator: InputIndicatorAppearances
  menu: ListboxAppearance
  option: OptionAppearances
}
export type SelectAppearanceVariant = (theme: Theme, shape: SelectShape) => SelectAppearance
