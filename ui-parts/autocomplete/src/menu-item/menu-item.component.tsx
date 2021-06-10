import styled                         from '@emotion/styled'

import { MenuItemElement }            from './menu-item.element'
import { baseMenuItemStyles }         from './menu-item.styles'
import { ifSelectedMenuItemModifier } from './menu-item.styles'
import { ifHoveredMenuItemModifier }  from './menu-item.styles'

const MenuItem = styled(MenuItemElement)(
  baseMenuItemStyles,
  ifSelectedMenuItemModifier(),
  ifHoveredMenuItemModifier()
)

export { MenuItem }
