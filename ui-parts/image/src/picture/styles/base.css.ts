import { style }   from '@vanilla-extract/css'

import { opacity } from '@atls-ui/theme/tokens'
export const pictureStyles = style({
  position: 'relative',
  display: 'block',
  width: '100%',
  height: '100%',
  opacity: opacity.none,
  visibility: 'hidden',
  selectors: { '&[data-loaded="true"]': { opacity: opacity.full, visibility: 'visible' } },
})
