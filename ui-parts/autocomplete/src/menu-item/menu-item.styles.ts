import { CSSObject } from '@emotion/core'
import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

export const baseMenuItemStyles: styleFn = () => ({
  color: '#333',
  padding: '4px 16px',
  fontSize: '14.8px',
  cursor: 'pointer',
})

export const selectedMenuItemStyles: CSSObject = {
  fontWeight: 'bold',
}

export const ifSelectedMenuItemModifier = (styles?: CSSObject | styleFn) =>
  ifProp('selected', [selectedMenuItemStyles, styles])

export const hoveredMenuItemStyles: CSSObject = {
  background: '#f3f3f3',
}

export const ifHoveredMenuItemModifier = (styles?: CSSObject | styleFn) =>
  ifProp('hovered', [hoveredMenuItemStyles, styles])
