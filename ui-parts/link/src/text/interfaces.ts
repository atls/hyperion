import type { ReactNode }      from 'react'

import type { TextAppearance } from './styles/appearance/interfaces.js'
import type { TextShape }      from './styles/shape/interfaces.js'
export interface TextProps {
  children?: ReactNode
  shape: TextShape
  appearance: TextAppearance
}
