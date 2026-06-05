import type { CheckboxShape }     from '../checkbox.interfaces.js'
import type { CheckboxShapeName } from '../checkbox.interfaces.js'

import { boxShapeStyles }         from '../box/index.js'
import { checkShapeStyles }       from '../check/index.js'
import { labelShapeStyles }       from '../label/index.js'

export const checkboxShapes: Record<CheckboxShapeName, CheckboxShape> = {
  large: {
    box: boxShapeStyles.large,
    check: checkShapeStyles,
    label: labelShapeStyles,
  },
  medium: {
    box: boxShapeStyles.medium,
    check: checkShapeStyles,
    label: labelShapeStyles,
  },
  small: {
    box: boxShapeStyles.small,
    check: checkShapeStyles,
    label: labelShapeStyles,
  },
}
