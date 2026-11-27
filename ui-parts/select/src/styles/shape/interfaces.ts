import type { ListboxShape }   from '@atls-ui-parts/listbox'
import type { OptionShape }    from '@atls-ui-parts/listbox'

import type { ContainerShape } from '../../container/styles/shape/interfaces.js'
import type { IndicatorShape } from '../../indicator/styles/shape/interfaces.js'
import type { TriggerShape }   from '../../trigger/styles/shape/interfaces.js'
import type { ValueShape }     from '../../value/styles/shape/interfaces.js'
export interface SelectShape {
  container: ContainerShape
  trigger: TriggerShape
  value: ValueShape
  indicator: IndicatorShape
  menu: ListboxShape
  option: OptionShape
}
