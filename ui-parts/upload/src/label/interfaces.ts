import type { HTMLAttributes }  from 'react'

import type { LabelAppearance } from './styles/appearance/interfaces.js'
import type { LabelShape }      from './styles/shape/interfaces.js'
export interface LabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  text: string
  shape: LabelShape
  appearance: LabelAppearance
  hoverAppearance: LabelAppearance
}
