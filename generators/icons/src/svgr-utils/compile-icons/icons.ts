import type { Icon }              from '../../interfaces.js'
import type { Replacements }      from '../../interfaces.js'
import type { Source }            from '../../interfaces.js'

import { transform }              from '@svgr/core'

import { MASK_ID_PATTERN }        from './constants.js'
import { PROPS_SPREAD_FROM }      from './constants.js'
import { PROPS_SPREAD_TO }        from './constants.js'
import { FIFTY_PLUS_PATTERN }     from './constants.js'
import { FIFTY_PLUS_REPLACEMENT } from './constants.js'
import { svgrTransformConfig }    from './constants.js'

export const compileIcons = async (
  icons: Array<Icon>,
  replacements: Replacements
): Promise<Array<Source>> => {
  const promises = icons.map(async (icon) => {
    const transformed = await transform(
      icon.source,
      {
        ...svgrTransformConfig,
        replaceAttrValues: { ...replacements[icon.name] },
      },
      { componentName: icon.name.replace(FIFTY_PLUS_PATTERN, FIFTY_PLUS_REPLACEMENT) }
    )

    const code = transformed
      .replace(MASK_ID_PATTERN, icon.name)
      .replace(PROPS_SPREAD_FROM, PROPS_SPREAD_TO)

    return {
      name: icon.fileName,
      code,
      withReplacement: Boolean(replacements[icon.name]),
    }
  })

  return Promise.all(promises)
}
