import { CSSObject } from '@emotion/css'
import { keyframes } from '@emotion/css'

import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

const loadingCircle = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const spinStyles: CSSObject = {
  animation: `${loadingCircle} 1s infinite linear`,
}

export const ifSpinModifier = (styles?: CSSObject | styleFn) => ifProp('spin', [spinStyles, styles])
