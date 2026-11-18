import type { LinearProgressAnimation } from './animation/interfaces.js'
import type { IndicatorAppearance }     from './styles/appearance/interfaces.js'
import type { IndicatorShape }          from './styles/shape/interfaces.js'

export interface IndicatorProps {
  shape: IndicatorShape
  appearance: IndicatorAppearance
  value?: number
  animation: LinearProgressAnimation
}
