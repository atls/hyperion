import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const customBoxStyles = style({
  borderColor: vars.colors.black,
  borderRadius: 6,
})

export const customCheckStyles = style({
  color: vars.colors.white,
  fontSize: 12,
  fontWeight: 700,
  backgroundColor: vars.colors.black,
  borderRadius: 4,
})

export const customContainerStyles = style({
  padding: '8px 12px',
  border: `1px solid ${vars.colors['text.lightGray']}`,
  borderRadius: 8,
})

export const customLabelStyles = style({
  color: vars.colors.black,
  fontWeight: 600,
})
