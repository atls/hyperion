import type { ContainerShape } from '../../container/styles/shape/interfaces.js'
import type { IconShape }      from '../../icon/styles/shape/interfaces.js'
import type { TextShape }      from '../../text/styles/shape/interfaces.js'
export interface LinkShape {
  container: ContainerShape
  text: TextShape
  icon: IconShape
}
