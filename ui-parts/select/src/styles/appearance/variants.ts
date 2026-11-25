import type { SelectAppearanceVariant } from './interfaces.js'

import { inputIndicatorAppearances }    from '@atls-ui-parts/input'
import { inputValueAppearances }        from '@atls-ui-parts/input'
import { listboxAppearances }           from '@atls-ui-parts/listbox'
import { optionAppearances }            from '@atls-ui-parts/listbox'

import { triggerAppearances }           from '../../trigger/styles/appearance/variants.js'
export const selectAppearances = {
  default: (theme, shape) => ({
    trigger: triggerAppearances.default(theme, shape.trigger),
    value: inputValueAppearances.default(theme),
    indicator: inputIndicatorAppearances.default(theme),
    menu: listboxAppearances.default(theme),
    option: optionAppearances.default(theme),
  }),
} satisfies Record<string, SelectAppearanceVariant>
