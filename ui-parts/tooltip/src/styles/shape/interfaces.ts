import type { ArrowShape }     from '../../arrow/styles/shape/interfaces.js'
import type { BoxShape }       from '../../box/styles/shape/interfaces.js'
import type { ContainerShape } from '../../container/styles/shape/interfaces.js'
import type { TextShape }      from '../../text/styles/shape/interfaces.js'

export interface TooltipShape {
  container: ContainerShape
  box: BoxShape
  text: TextShape
  arrow: ArrowShape
}
