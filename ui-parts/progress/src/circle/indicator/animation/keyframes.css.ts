import { keyframes }              from '@vanilla-extract/css'

import { SPINNER_DASH_ARRAY }     from './constants.js'
import { SPINNER_OFFSETS }        from './constants.js'
import { ORBIT_DASH_ARRAY }       from './constants.js'
import { ORBIT_LEADING_OFFSETS }  from './constants.js'
import { ORBIT_TRAILING_OFFSETS } from './constants.js'

export const spinner = keyframes({
  from: { strokeDasharray: SPINNER_DASH_ARRAY, strokeDashoffset: SPINNER_OFFSETS.start },
  to: { strokeDasharray: SPINNER_DASH_ARRAY, strokeDashoffset: SPINNER_OFFSETS.end },
})

export const orbitLeading = keyframes({
  'from, to': { strokeDasharray: ORBIT_DASH_ARRAY, strokeDashoffset: ORBIT_LEADING_OFFSETS.start },
  '50%': { strokeDasharray: ORBIT_DASH_ARRAY, strokeDashoffset: ORBIT_LEADING_OFFSETS.middle },
})

export const orbitTrailing = keyframes({
  from: { strokeDasharray: ORBIT_DASH_ARRAY, strokeDashoffset: ORBIT_TRAILING_OFFSETS.start },
  '50%': { strokeDasharray: ORBIT_DASH_ARRAY, strokeDashoffset: ORBIT_TRAILING_OFFSETS.middle },
  to: { strokeDasharray: ORBIT_DASH_ARRAY, strokeDashoffset: ORBIT_TRAILING_OFFSETS.end },
})
