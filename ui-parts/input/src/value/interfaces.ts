import type { HTMLAttributes }        from 'react'

import type { InputValueAppearances } from './styles/appearance/interfaces.js'
import type { InputValueShape }       from './styles/shape/interfaces.js'
export interface InputValueProps extends HTMLAttributes<HTMLSpanElement> {
  shape: InputValueShape
  appearance: InputValueAppearances
  placeholder: boolean
}
