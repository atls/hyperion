import type { SelectAppearanceVariant } from './interfaces.js'

import { listboxAppearances }           from '@atls-ui-parts/listbox'
import { optionAppearances }            from '@atls-ui-parts/listbox'

import { indicatorAppearances }         from '../../indicator/styles/appearance/variants.js'
import { triggerAppearances }           from '../../trigger/styles/appearance/variants.js'
import { valueAppearances }             from '../../value/styles/appearance/variants.js'
export const selectAppearances = {
  default: (theme, shape) => ({
    trigger: triggerAppearances.default(theme, shape.trigger),
    value: valueAppearances.default(theme),
    indicator: indicatorAppearances.default(theme),
    menu: listboxAppearances.default(theme),
    option: optionAppearances.default(theme),
  }),
} satisfies Record<string, SelectAppearanceVariant>
