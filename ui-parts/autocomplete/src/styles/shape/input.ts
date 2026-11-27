import type { InputFieldShape } from '@atls-ui-parts/input'
import type { InputShape }      from '@atls-ui-parts/input'

import { inputShapes }          from '@atls-ui-parts/input'
export const toInputShape = (field: InputFieldShape): InputShape => ({
  ...inputShapes.md,
  elevation: field.elevationSize,
  field,
})
