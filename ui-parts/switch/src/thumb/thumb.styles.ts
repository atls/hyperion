import { CSSObject } from '@emotion/core'
import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

export const baseThumbStyles: CSSObject = {
  position: 'absolute',
  cursor: 'pointer',
  borderRadius: '50% 50%',
  backgroundColor: '#454B60',
  boxSizing: 'border-box',
  width: 18,
  height: 18,
}

export const disabledThumbStyles: CSSObject = {
  backgroundColor: '#fff',
  border: '1px solid #454B60',
}

export const ifDisabledThumbModifier = (styles?: CSSObject | styleFn) =>
  ifProp('disabled', [disabledThumbStyles, styles])
