import { CSSObject }  from '@emotion/react'

import { styleFn }    from 'styled-system'
import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

export const baseLinePercentStyles: CSSObject = {
  display: 'flex',
  position: 'absolute',
  height: '100%',
  transition: 'all 0.3s linear',
}

export const linePercentLinecapStyles: CSSObject = {
  round: {
    borderRadius: 100,
  },
  square: {
    borderRadius: 0,
  },
}

export const linePercentLinecapModifier = (styles?: CSSObject | styleFn, defaultValue?: string) =>
  switchProp(prop('strokeLinecap', defaultValue || 'square'), styles || linePercentLinecapStyles)
