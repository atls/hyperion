import type { CircleProgressShape } from '@atls-ui-parts/progress'

import type { ActionsShape }        from '../../actions/styles/shape/interfaces.js'
import type { BoxShape }            from '../../box/styles/shape/interfaces.js'
import type { CloseShape }          from '../../close/styles/shape/interfaces.js'
import type { ContainerShape }      from '../../container/styles/shape/interfaces.js'

export interface ModalShape {
  actions: ActionsShape
  container: ContainerShape
  loading: CircleProgressShape
  box: BoxShape
  close: CloseShape
}
