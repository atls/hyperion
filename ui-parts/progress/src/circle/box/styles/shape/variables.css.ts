import { createVar } from '@vanilla-extract/css'

export const radiusInput = createVar()
export const boxRadius = createVar({
  syntax: '<length-percentage>',
  inherits: true,
  initialValue: '0px',
})
