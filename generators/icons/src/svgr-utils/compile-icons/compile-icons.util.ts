import type { Icon }              from '../../icons.interfaces.js'
import type { Replacements }      from '../../icons.interfaces.js'
import type { Source }            from '../../icons.interfaces.js'

import { transform }              from '@svgr/core'

import { MASK_ID_PATTERN }        from './compile-icons.constants.js'
import { PROPS_SPREAD_FROM }      from './compile-icons.constants.js'
import { PROPS_SPREAD_TO }        from './compile-icons.constants.js'
import { FIFTY_PLUS_PATTERN }     from './compile-icons.constants.js'
import { FIFTY_PLUS_REPLACEMENT } from './compile-icons.constants.js'
import { svgrTransformConfig }    from './compile-icons.constants.js'

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
