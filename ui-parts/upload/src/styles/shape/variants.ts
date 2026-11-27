import type { Theme }           from '@atls-ui/theme'

import type { UploadShape }     from './interfaces.js'

import { linearProgressShapes } from '@atls-ui-parts/progress'

import { boxShapes }            from '../../box/styles/shape/variants.js'
import { containerShapes }      from '../../container/styles/shape/variants.js'
import { iconShapes }           from '../../icon/styles/shape/variants.js'
import { labelShapes }          from '../../label/styles/shape/variants.js'
export const uploadShapes = {
  default: (theme: Theme): UploadShape => ({
    container: containerShapes.default,
    box: boxShapes.default,
    icon: iconShapes.default,
    label: labelShapes.default(theme),
    progress: linearProgressShapes.sm,
  }),
}
