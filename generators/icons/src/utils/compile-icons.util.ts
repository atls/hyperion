import type { Icon }               from '../icons.interfaces'
import type { Replacements }       from '../icons.interfaces'
import type { Source }             from '../icons.interfaces'
import type { CreateSvgrTemplate } from '../icons.interfaces'

import { transform }               from '@svgr/core'

const createSvgrTemplate: CreateSvgrTemplate = (withReplacement) =>
  ({ jsx, componentName }, { tpl }) => tpl`
  import type { IconProps } from '../icons.interfaces.js'

  import React from 'react'
  import { memo } from 'react'

  ${withReplacement ? `import { vars } from '@atls-ui-admin/theme'` : ''}

  export const ${componentName} = memo((props: IconProps) => (
    ${jsx}
  ))
`

export const compileIcons = async (
  icons: Array<Icon>,
  replacements: Replacements
): Promise<Array<Source>> =>
  Promise.all(
    icons.map(async (icon) => ({
      name: icon.fileName,
      code: await transform(
        icon.source.replace(/mask0/g, icon.name),
        {
          icon: true,
          typescript: true,
          template: createSvgrTemplate(Boolean(replacements[icon.name])),
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          replaceAttrValues: replacements[icon.name] || {},
        },
        { componentName: icon.name.replace('50+', 'FiftyPlus') }
      ),
      withReplacement: Boolean(replacements[icon.name]),
    }))
  )
