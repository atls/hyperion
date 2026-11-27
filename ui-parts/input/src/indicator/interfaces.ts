import type { ReactNode }                 from 'react'

import type { InputIndicatorAppearances } from './styles/appearance/interfaces.js'
import type { InputIndicatorShape }       from './styles/shape/interfaces.js'
export interface InputIndicatorProps {
  children: ReactNode
  shape: InputIndicatorShape
  appearance: InputIndicatorAppearances
  className?: string
}
