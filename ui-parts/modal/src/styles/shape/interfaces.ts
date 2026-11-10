import type { ButtonShape }         from '@atls-ui-parts/button'
import type { CircleProgressShape } from '@atls-ui-parts/progress'
import type { CSSProperties }       from 'react'

import type { BoxShape }            from '../../box/styles/shape/interfaces.js'
import type { CloseShape }          from '../../close/styles/shape/interfaces.js'

export interface ModalShape {
  actions: { gap: CSSProperties['gap']; button: ButtonShape }
  loading: CircleProgressShape
  box: BoxShape
  close: CloseShape
}
