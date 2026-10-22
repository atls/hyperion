import type { CheckboxShape }     from '../checkbox.interfaces.js'
import type { CheckboxShapeName } from '../checkbox.interfaces.js'

import { boxShapeStyles }         from '../box/index.js'
import { checkShapeStyles }       from '../check/index.js'
import { labelShapeStyles }       from '../label/index.js'

export const checkboxShapes: Record<CheckboxShapeName, CheckboxShape> = {
  sm: {
    box: boxShapeStyles.sm,
    check: checkShapeStyles.sm,
    label: labelShapeStyles.sm,
  },
  md: {
    box: boxShapeStyles.md,
    check: checkShapeStyles.md,
    label: labelShapeStyles.md,
  },
  lg: {
    box: boxShapeStyles.lg,
    check: checkShapeStyles.lg,
    label: labelShapeStyles.lg,
  },
}
