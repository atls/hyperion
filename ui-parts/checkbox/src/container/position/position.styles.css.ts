import { styleVariants } from '@vanilla-extract/css'

export const containerPositionStyles = styleVariants({
  start: { flexDirection: 'row-reverse' },
  top: { flexDirection: 'column-reverse' },
  end: { flexDirection: 'row' },
  bottom: { flexDirection: 'column' },
})
