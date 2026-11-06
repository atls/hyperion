import type { BoxShape }       from '../../box/styles/shape/interfaces.js'
import type { ContainerShape } from '../../container/styles/shape/interfaces.js'
import type { IndicatorShape } from '../../indicator/styles/shape/interfaces.js'
import type { LabelShape }     from '../../label/styles/shape/interfaces.js'

export interface CircleProgressShape {
  container: ContainerShape
  box: BoxShape
  indicator: IndicatorShape
  label: LabelShape
}
