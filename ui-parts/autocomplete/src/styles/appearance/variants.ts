import type { AutocompleteAppearanceVariant } from './interfaces.js'

import { inputFieldAppearances }              from '@atls-ui-parts/input'
import { inputIndicatorAppearances }          from '@atls-ui-parts/input'
import { listboxAppearances }                 from '@atls-ui-parts/listbox'
import { optionAppearances }                  from '@atls-ui-parts/listbox'
export const autocompleteAppearances = {
  default: (theme, shape) => ({
    input: inputFieldAppearances.default(theme, shape.input),
    indicator: inputIndicatorAppearances.default(theme),
    menu: listboxAppearances.default(theme),
    option: optionAppearances.default(theme),
    message: optionAppearances.default(theme).disabled,
  }),
} satisfies Record<string, AutocompleteAppearanceVariant>
