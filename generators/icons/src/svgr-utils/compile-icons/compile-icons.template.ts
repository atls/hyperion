import type { Config } from '@svgr/core'

export const svgrTemplate: Config['template'] = ({ jsx, componentName }, { tpl }) => tpl`
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
