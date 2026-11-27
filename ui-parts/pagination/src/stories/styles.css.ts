import { keyframes } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

import { opacity }   from '@atls-ui/theme/tokens'
import { spacing }   from '@atls-ui/theme/tokens'

export const fadeEnter = keyframes({
  from: { opacity: opacity.none, scale: '0.7' },
  '50%': { opacity: opacity.full, scale: '1.2' },
  to: { opacity: opacity.none, scale: '1' },
})
export const fadeLeave = keyframes({
  from: { opacity: opacity.full },
  to: { opacity: opacity.none },
})

export const previewStyles = style({
  display: 'grid',
  placeItems: 'center',
  padding: spacing.layout.xl,
})
