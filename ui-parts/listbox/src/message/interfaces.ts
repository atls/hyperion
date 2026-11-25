import type { HTMLAttributes }   from 'react'

import type { OptionAppearance } from '../option/styles/appearance/interfaces.js'
import type { OptionShape }      from '../option/styles/shape/interfaces.js'
export interface ListboxMessageProps extends HTMLAttributes<HTMLLIElement> {
  shape: OptionShape
  appearance: OptionAppearance
}
