import { CSSObject } from '@emotion/css'

import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

export const baseItemStyles: CSSObject = {
  width: '100%',
  height: 56,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
  textDecoration: 'none',
  boxSizing: 'border-box',
  color: 'black',
}

export const activeItemStyles: CSSObject = {
  '&:after': {
    content: '""',
    width: 2,
    backgroundColor: '#454B60',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
  },
}

export const ifActiveItemModifier = (styles?: CSSObject | styleFn) =>
  ifProp('active', [activeItemStyles, styles])
