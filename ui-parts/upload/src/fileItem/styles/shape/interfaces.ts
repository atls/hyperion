import type { ButtonShape }            from '@atls-ui-parts/button'
import type { LinearProgressShape }    from '@atls-ui-parts/progress'
import type { CSSProperties }          from 'react'

import type { FileItemContainerShape } from '../../container/styles/shape/interfaces.js'
import type { NameShape }              from '../../name/styles/shape/interfaces.js'
export interface FileItemShape {
  container: FileItemContainerShape
  name: NameShape
  remove: ButtonShape
  removeIconSize: CSSProperties['width']
  progress: LinearProgressShape
}
