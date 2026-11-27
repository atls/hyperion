import type { InputFieldShape }     from '@atls-ui-parts/input'
import type { InputValueShape }     from '@atls-ui-parts/input'
import type { InputIndicatorShape } from '@atls-ui-parts/input'
import type { ListboxShape }        from '@atls-ui-parts/listbox'
import type { OptionShape }         from '@atls-ui-parts/listbox'
import type { CSSProperties }       from 'react'

import type { ContainerShape }      from '../../container/styles/shape/interfaces.js'
export interface AutocompleteMenuShape extends ListboxShape {
  statusWidth?: CSSProperties['width']
}
export interface AutocompleteShape {
  container: ContainerShape
  input: InputFieldShape
  value: InputValueShape
  indicator: InputIndicatorShape
  menu: AutocompleteMenuShape
  option: OptionShape
}
