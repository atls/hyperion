import type { SelectAppearanceVariant } from './interfaces.js'

import { indicatorAppearances }         from '../../indicator/styles/appearance/variants.js'
import { menuAppearances }              from '../../menu/styles/appearance/variants.js'
import { optionAppearances }            from '../../option/styles/appearance/variants.js'
import { triggerAppearances }           from '../../trigger/styles/appearance/variants.js'
import { valueAppearances }             from '../../value/styles/appearance/variants.js'
export const selectAppearances = {
  default: (theme, shape) => ({
    trigger: triggerAppearances.default(theme, shape.trigger),
    value: valueAppearances.default(theme),
    indicator: indicatorAppearances.default(theme),
    menu: menuAppearances.default(theme),
    option: optionAppearances.default(theme),
  }),
} satisfies Record<string, SelectAppearanceVariant>
