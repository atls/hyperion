import type { Config }       from '@svgr/core'

import type { Icon }         from '../icons.interfaces.js'
import type { Replacements } from '../icons.interfaces.js'
import type { Source }       from '../icons.interfaces.js'

import { transform }         from '@svgr/core'

const svgrTemplate: Config['template'] = ({ jsx, componentName }, { tpl }) => tpl`
  import type { IconProps } from '../icons.interfaces.js'

  import type { ReactNode } from 'react'

  import React from 'react'
  import { clsx } from 'clsx'

  import { iconSprinkles }  from '../icon.css.js'

  export const ${componentName} = (props: IconProps): ReactNode => {
    const { className, style, otherProps } = iconSprinkles(props)

    const iconStyle = { ...style, ...otherProps.style } 

    return (
      ${jsx}
    )
}
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
          template: svgrTemplate,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          svgProps: {
            className: `{clsx(className, String(otherProps.className || ''))}`,
            style: '{iconStyle}',
          },
          replaceAttrValues: { ...replacements[icon.name] },
        },
        { componentName: icon.name.replace('50+', 'FiftyPlus') }
      ).then((value) => value.replace('...props', '...otherProps')),
      withReplacement: Boolean(replacements[icon.name]),
    }))
  )
