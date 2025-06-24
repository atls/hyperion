import type { SVGProps }      from 'react'

import type { iconSprinkles } from './icon.css.js'

export type IconSprinkles = Parameters<typeof iconSprinkles>[0]

export type IconProps = IconSprinkles &
  Omit<SVGProps<SVGSVGElement>, 'color' | 'height' | 'stroke' | 'width'>
