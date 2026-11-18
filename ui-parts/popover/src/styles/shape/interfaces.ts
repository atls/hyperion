import type { ArrowShape }     from '../../arrow/styles/shape/interfaces.js'
import type { BoxShape }       from '../../box/styles/shape/interfaces.js'
import type { ContainerShape } from '../../container/styles/shape/interfaces.js'

export interface PopoverShape {
  container: ContainerShape
  box: BoxShape
  arrow: ArrowShape
}
