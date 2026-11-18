import type { Config } from '@svgr/core'

export const svgrTemplate: Config['template'] = ({ jsx, componentName }, { tpl }) => tpl`
  import type { ReactNode } from 'react'

  import type { IconProps } from '../icons.interfaces.js'

  export const ${componentName} = (props: IconProps): ReactNode => (
    ${jsx}
  )
`
