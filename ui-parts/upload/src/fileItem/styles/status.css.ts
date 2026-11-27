import { style }       from '@vanilla-extract/css'

import { STATUS_SIZE } from '../constants.js'

export const statusStyles = style({
  position: 'absolute',
  width: STATUS_SIZE,
  height: STATUS_SIZE,
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
})
