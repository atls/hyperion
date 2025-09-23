import type { Config }  from '@svgr/core'

import { svgrTemplate } from './compile-icons.template.js'

export const MASK_ID_PATTERN = /mask0/g
export const PROPS_SPREAD_FROM = '...props'
export const PROPS_SPREAD_TO = '...otherProps'

export const FIFTY_PLUS_PATTERN = '50+'
export const FIFTY_PLUS_REPLACEMENT = 'FiftyPlus'

export const svgrTransformConfig: Config = {
  icon: true,
  typescript: true,
  template: svgrTemplate,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  svgProps: {
    className: `{clsx(className, String(otherProps.className || ''))}`,
    style: '{iconStyle}',
  },
}
