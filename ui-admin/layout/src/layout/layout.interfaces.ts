import type { BaseLayoutProps } from '@atls-ui-parts/layout'

import type { LayoutSprinkles } from './layout.css.js'

export interface LayoutProps extends BaseLayoutProps, LayoutSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
