import type { ComponentPropsWithRef } from 'react'

import type { MenuAppearance }        from './styles/appearance/interfaces.js'
import type { MenuShape }             from './styles/shape/interfaces.js'
export interface MenuProps extends ComponentPropsWithRef<'ul'> {
  shape: MenuShape
  appearance: MenuAppearance
}
