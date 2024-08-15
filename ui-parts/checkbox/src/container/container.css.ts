import { styleVariants } from '@vanilla-extract/css'
import { style }         from '@vanilla-extract/css'

export const containerBaseStyles = style({
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
  alignItems: 'center',
  userSelect: 'none',
  outline: 'none',
})

export const containerPositionStyles = styleVariants({
  start: { flexDirection: 'row-reverse' },
  top: { flexDirection: 'column-reverse' },
  end: { flexDirection: 'row' },
  bottom: { flexDirection: 'column' },
})
