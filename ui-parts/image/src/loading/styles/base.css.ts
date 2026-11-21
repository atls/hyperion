import { style }   from '@vanilla-extract/css'

import { opacity } from '@atls-ui/theme/tokens'
export const loadingStyles = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  opacity: opacity.none,
  visibility: 'hidden',
  selectors: { '&[data-loading="true"]': { opacity: opacity.full, visibility: 'visible' } },
})
