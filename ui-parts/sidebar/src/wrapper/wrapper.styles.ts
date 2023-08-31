import { CSSObject } from '@emotion/css'

import { ifProp }    from 'styled-tools'
import { styleFn }   from 'styled-system'

export const baseWrapperStyles: CSSObject = {
  position: 'relative',
  display: 'flex',
  height: '100%',
  width: 80,
}

export const pinnedWrapperStyles: CSSObject = {
  width: 'initial',
}

export const ifPinnedWrapperModifier = (styles?: CSSObject | styleFn) =>
  ifProp('pinned', [pinnedWrapperStyles, styles])
