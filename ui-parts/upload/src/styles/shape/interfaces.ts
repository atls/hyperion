import type { LinearProgressShape } from '@atls-ui-parts/progress'

import type { BoxShape }            from '../../box/styles/shape/interfaces.js'
import type { ContainerShape }      from '../../container/styles/shape/interfaces.js'
import type { IconShape }           from '../../icon/styles/shape/interfaces.js'
import type { LabelShape }          from '../../label/styles/shape/interfaces.js'
export interface UploadShape {
  container: ContainerShape
  box: BoxShape
  icon: IconShape
  label: LabelShape
  progress: LinearProgressShape
}
