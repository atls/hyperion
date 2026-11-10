import type { BoxAppearance }       from '../../box/styles/appearance/interfaces.js'
import type { IndicatorAppearance } from '../../indicator/styles/appearance/interfaces.js'
import type { LabelAppearance }     from '../../label/styles/appearance/interfaces.js'
import type { TrackAppearance }     from '../../track/styles/appearance/interfaces.js'

export interface CircleProgressAppearance {
  box: BoxAppearance
  track: TrackAppearance
  indicator: IndicatorAppearance
  label: LabelAppearance
}
