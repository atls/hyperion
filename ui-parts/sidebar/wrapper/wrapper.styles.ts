import { CSSObject } from '@emotion/css'
import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

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
