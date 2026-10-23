import type { Icon }           from '../../interfaces.js'

import { transform }           from '@svgr/core'

import { MASK_ID_PATTERN }     from './constants.js'
import { svgrTransformConfig } from './constants.js'

export const compileIconJsx = async (icon: Icon): Promise<string> =>
  transform(icon.source.replace(MASK_ID_PATTERN, icon.name), {
    ...svgrTransformConfig,
    template: ({ jsx }, { tpl }) => tpl`${jsx}`,
  })
