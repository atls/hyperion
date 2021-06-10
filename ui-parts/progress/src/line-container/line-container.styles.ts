import { CSSObject }        from '@emotion/core'
import { styleFn }          from 'styled-system'
import { prop, switchProp } from 'styled-tools'

export const baseLineContainerStyles: CSSObject = {
  display: 'flex',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}

export const lineContainerLinecapStyles: CSSObject = {
  round: {
    borderRadius: 100,
  },
  square: {
    borderRadius: 0,
  },
}

export const lineContainerLinecapModifier = (styles?: CSSObject | styleFn, defaultValue?: string) =>
  switchProp(prop('trailLinecap', defaultValue || 'square'), styles || lineContainerLinecapStyles)
