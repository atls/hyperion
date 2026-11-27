import type { HTMLAttributes }   from 'react'

import type { ValueAppearances } from './styles/appearance/interfaces.js'
import type { ValueShape }       from './styles/shape/interfaces.js'
export interface ValueProps extends HTMLAttributes<HTMLSpanElement> {
  shape: ValueShape
  appearance: ValueAppearances
  placeholder: boolean
}
