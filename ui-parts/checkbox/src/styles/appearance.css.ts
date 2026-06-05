import type { CheckboxAppearance }     from './interfaces.js'
import type { CheckboxAppearanceName } from './interfaces.js'

import { boxAppearanceStyles }         from '../box/index.js'
import { checkAppearanceStyles }       from '../check/index.js'
import { labelAppearanceStyles }       from '../label/index.js'

export const checkboxAppearances: Record<CheckboxAppearanceName, CheckboxAppearance> = {
  blue: {
    box: boxAppearanceStyles.blue,
    check: checkAppearanceStyles.blue,
    label: labelAppearanceStyles,
  },
  green: {
    box: boxAppearanceStyles.green,
    check: checkAppearanceStyles.green,
    label: labelAppearanceStyles,
  },
  red: {
    box: boxAppearanceStyles.red,
    check: checkAppearanceStyles.red,
    label: labelAppearanceStyles,
  },
}
