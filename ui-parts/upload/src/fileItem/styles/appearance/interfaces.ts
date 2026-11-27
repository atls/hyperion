import type { ButtonAppearance }         from '@atls-ui-parts/button'
import type { LinearProgressAppearance } from '@atls-ui-parts/progress'

import type { NameAppearance }           from '../../name/styles/appearance/interfaces.js'
import type { FileItemState }            from '../../states.js'
export interface FileItemAppearance {
  name: Record<FileItemState, NameAppearance>
  remove: Record<FileItemState, ButtonAppearance>
  progress: LinearProgressAppearance
}
