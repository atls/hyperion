import type { buttonAppearances } from '@atls-ui-admin/button'
import type { buttonShapes }      from '@atls-ui-admin/button'

export type ButtonAppearanceName = keyof typeof buttonAppearances
export type ButtonShapeName = keyof typeof buttonShapes

export interface UploadStoryProps {
  appearance: ButtonAppearanceName
  customPlaceholder: boolean
  shape: ButtonShapeName
}
