import type { LinearAnimationSegment }  from '../animation/interfaces.js'
import type { LinearProgressAnimation } from '../animation/interfaces.js'
import type { IndicatorAppearance }     from '../styles/appearance/interfaces.js'
import type { IndicatorShape }          from '../styles/shape/interfaces.js'

export interface AnimatedSegmentProps {
  shape: IndicatorShape
  appearance: IndicatorAppearance
  animation: LinearProgressAnimation
  segment: LinearAnimationSegment
}
