import { styleVariants } from '@vanilla-extract/css'

export const labelPositionStyles = styleVariants({
  start: { marginRight: 5 },
  end: { marginLeft: 5 },
  top: { marginBottom: 5 },
  bottom: { marginTop: 5 },
})
