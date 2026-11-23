import type { Theme }              from '@atls-ui/theme'

import type { FileItemShape }      from './interfaces.js'

import { linearProgressShapes }    from '@atls-ui-parts/progress'

import { REMOVE_ICON_SIZE }        from './constants.js'
import { fileItemContainerShapes } from '../../container/styles/shape/variants.js'
import { nameShapes }              from '../../name/styles/shape/variants.js'
import { removeStyle }             from './styles.css.js'
export const fileItemShapes = {
  default: (theme: Theme): FileItemShape => ({
    container: fileItemContainerShapes.default,
    name: nameShapes.default(theme),
    remove: removeStyle,
    removeIconSize: REMOVE_ICON_SIZE,
    progress: {
      ...linearProgressShapes.sm,
      track: { ...linearProgressShapes.sm.track, width: '100%' },
    },
  }),
}
