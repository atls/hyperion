import type { InputFieldShape }     from '@atls-ui-parts/input'
import type { InputIndicatorShape } from '@atls-ui-parts/input'
import type { InputValueShape }     from '@atls-ui-parts/input'
import type { ListboxShape }        from '@atls-ui-parts/listbox'
import type { OptionShape }         from '@atls-ui-parts/listbox'

import type { ContainerShape }      from '../../container/styles/shape/interfaces.js'
export interface SelectShape {
  container: ContainerShape
  trigger: InputFieldShape
  value: InputValueShape
  indicator: InputIndicatorShape
  menu: ListboxShape
  option: OptionShape
}
