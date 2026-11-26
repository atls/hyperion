import type { LinearProgressAppearance } from '@atls-ui-parts/progress'

import type { BoxAppearance }            from '../../box/styles/appearance/interfaces.js'
import type { IconAppearance }           from '../../icon/styles/appearance/interfaces.js'
import type { LabelAppearance }          from '../../label/styles/appearance/interfaces.js'
import type { UploadVisualState }        from '../../states.js'
export interface UploadAppearance {
  box: Record<UploadVisualState, BoxAppearance>
  icon: Record<UploadVisualState, IconAppearance>
  label: Record<UploadVisualState, LabelAppearance>
  progress: LinearProgressAppearance
}
