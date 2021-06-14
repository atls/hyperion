import { injectGlobal }               from '@emotion/css'

import { createInjectableBaseStyles } from './base'
import { createAppearanceStyles }     from './appearance'
import { createCellShapeStyles }      from './shape'
import { DatepickerStyles }           from './datepicker-styles.interfaces'

export const injectBaseStyles = createInjectableBaseStyles()

export const createAndInjectDatepickerStyles = ({ ...appearance }) => {
  injectBaseStyles()
  injectGlobal({
    ...createAppearanceStyles(appearance),
    ...createCellShapeStyles(0, 14, 15),
  })
}
