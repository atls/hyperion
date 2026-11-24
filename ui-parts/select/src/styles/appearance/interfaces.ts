import type { Theme }                from '@atls-ui/theme'

import type { IndicatorAppearances } from '../../indicator/styles/appearance/interfaces.js'
import type { MenuAppearance }       from '../../menu/styles/appearance/interfaces.js'
import type { OptionAppearances }    from '../../option/styles/appearance/interfaces.js'
import type { TriggerAppearances }   from '../../trigger/styles/appearance/interfaces.js'
import type { ValueAppearances }     from '../../value/styles/appearance/interfaces.js'
import type { SelectShape }          from '../shape/interfaces.js'
export interface SelectAppearance {
  trigger: TriggerAppearances
  value: ValueAppearances
  indicator: IndicatorAppearances
  menu: MenuAppearance
  option: OptionAppearances
}
export type SelectAppearanceVariant = (theme: Theme, shape: SelectShape) => SelectAppearance
