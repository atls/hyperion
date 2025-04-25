import type { SVGProps }      from 'react'
import type { vars }          from '@atls-ui-admin/theme/theme-css'

import type { IconSprinkles } from './icon.css.js'

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'color' | 'height' | 'stroke' | 'width'>,
    IconSprinkles {
  color?: keyof typeof vars.colors
  stroke?: string
}
