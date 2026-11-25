import type { SelectShape }     from './interfaces.js'

import { inputFieldShapes }     from '@atls-ui-parts/input'
import { inputIndicatorShapes } from '@atls-ui-parts/input'
import { inputValueShapes }     from '@atls-ui-parts/input'
import { listboxShapes }        from '@atls-ui-parts/listbox'
import { optionShapes }         from '@atls-ui-parts/listbox'

import { containerShapes }      from '../../container/styles/shape/variants.js'
export const selectShapes: Record<'lg' | 'md' | 'sm', SelectShape> = {
  sm: {
    container: containerShapes.default,
    trigger: inputFieldShapes.sm,
    value: inputValueShapes.sm,
    indicator: inputIndicatorShapes.sm,
    menu: listboxShapes.sm,
    option: optionShapes.sm,
  },
  md: {
    container: containerShapes.default,
    trigger: inputFieldShapes.md,
    value: inputValueShapes.md,
    indicator: inputIndicatorShapes.md,
    menu: listboxShapes.md,
    option: optionShapes.md,
  },
  lg: {
    container: containerShapes.default,
    trigger: inputFieldShapes.lg,
    value: inputValueShapes.lg,
    indicator: inputIndicatorShapes.lg,
    menu: listboxShapes.lg,
    option: optionShapes.lg,
  },
}
