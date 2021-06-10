import { CSSObject } from '@emotion/core'
import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

export const baseIndicatorStyles: styleFn = () => ({
  background: 'transparent',
  borderWidth: 0,
  outline: 'none',
  cursor: 'pointer',
  paddingTop: 1,
  paddingBottom: 0,
  boxSizing: 'border-box',
  '& svg': {
    fill: 'currentColor',
  },
})

export const openIndicatorStyles: CSSObject = {
  '& svg': {
    transform: 'rotate(180deg)',
  },
}

export const ifOpenIndicatorModifier = (styles?: CSSObject | styleFn) =>
  ifProp('isOpen', [openIndicatorStyles, styles])
