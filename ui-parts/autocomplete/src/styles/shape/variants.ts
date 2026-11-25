import type { AutocompleteShape } from './interfaces.js'

import { inputFieldShapes }       from '@atls-ui-parts/input'
import { inputIndicatorShapes }   from '@atls-ui-parts/input'
import { inputValueShapes }       from '@atls-ui-parts/input'
import { listboxShapes }          from '@atls-ui-parts/listbox'
import { optionShapes }           from '@atls-ui-parts/listbox'

import { containerShapes }        from '../../container/styles/shape/variants.js'
export const autocompleteShapes: Record<'lg' | 'md' | 'sm', AutocompleteShape> = {
  sm: {
    container: containerShapes.default,
    input: inputFieldShapes.sm,
    value: inputValueShapes.sm,
    indicator: inputIndicatorShapes.sm,
    menu: listboxShapes.sm,
    option: optionShapes.sm,
  },
  md: {
    container: containerShapes.default,
    input: inputFieldShapes.md,
    value: inputValueShapes.md,
    indicator: inputIndicatorShapes.md,
    menu: listboxShapes.md,
    option: optionShapes.md,
  },
  lg: {
    container: containerShapes.default,
    input: inputFieldShapes.lg,
    value: inputValueShapes.lg,
    indicator: inputIndicatorShapes.lg,
    menu: listboxShapes.lg,
    option: optionShapes.lg,
  },
}
