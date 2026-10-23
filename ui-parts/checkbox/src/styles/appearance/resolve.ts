import type { Theme }                    from '@atls-ui/theme'

import type { BoxShape }                 from '../../box/styles/shape/interfaces.js'
import type { CheckboxAppearance }       from './interfaces.js'
import type { CheckboxAppearanceStates } from './interfaces.js'

import { checkboxAppearances }           from './variants.js'

export const getCheckboxAppearance = ({
  appearance,
  theme,
  elevationSize,
  checked,
  indeterminate,
}: {
  appearance?: CheckboxAppearance | keyof typeof checkboxAppearances
  theme: Theme
  elevationSize: BoxShape['elevationSize']
  checked: boolean
  indeterminate?: boolean
}): CheckboxAppearanceStates => {
  const definition: CheckboxAppearance =
    typeof appearance === 'string'
      ? checkboxAppearances[appearance](theme, elevationSize)
      : (appearance ?? checkboxAppearances.default(theme, elevationSize))

  if (indeterminate) {
    return definition.indeterminate ?? definition.checked
  }

  return checked ? definition.checked : definition.unchecked
}
