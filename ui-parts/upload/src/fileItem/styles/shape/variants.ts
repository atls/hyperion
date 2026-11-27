import type { Theme }              from '@atls-ui/theme'

import type { FileItemShape }      from './interfaces.js'

import { linearProgressShapes }    from '@atls-ui-parts/progress'
import { iconSizes }               from '@atls-ui/theme'

import { fileItemContainerShapes } from '../../container/styles/shape/variants.js'
import { nameShapes }              from '../../name/styles/shape/variants.js'
import { removeStyle }             from './styles.css.js'
export const fileItemShapes = {
  default: (theme: Theme): FileItemShape => ({
    container: fileItemContainerShapes.default,
    name: nameShapes.default(theme),
    remove: removeStyle,
    removeIconSize: iconSizes.xs,
    progress: {
      ...linearProgressShapes.sm,
      track: { ...linearProgressShapes.sm.track, width: '100%' },
    },
  }),
}
