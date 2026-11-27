import type { ReactNode }            from 'react'

import type { IndicatorAppearances } from './styles/appearance/interfaces.js'
import type { IndicatorShape }       from './styles/shape/interfaces.js'
export interface IndicatorProps {
  children: ReactNode
  shape: IndicatorShape
  appearance: IndicatorAppearances
  className?: string
}
