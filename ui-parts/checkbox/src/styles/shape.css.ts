import type { CheckboxShape }     from '../checkbox.interfaces.js'
import type { CheckboxShapeName } from '../checkbox.interfaces.js'

import { spacing }                from '@atls-ui/theme'

import { boxShapeStyles }         from '../box/index.js'
import { checkShapeStyles }       from '../check/index.js'
import { labelShapeStyles }       from '../label/index.js'

export const checkboxShapes: Record<CheckboxShapeName, CheckboxShape> = {
  sm: {
    box: boxShapeStyles.sm,
    check: checkShapeStyles.sm,
    gap: spacing.component.xs,
    label: labelShapeStyles.sm,
  },
  md: {
    box: boxShapeStyles.md,
    check: checkShapeStyles.md,
    gap: spacing.component.sm,
    label: labelShapeStyles.md,
  },
  lg: {
    box: boxShapeStyles.lg,
    check: checkShapeStyles.lg,
    gap: spacing.component.md,
    label: labelShapeStyles.lg,
  },
}
