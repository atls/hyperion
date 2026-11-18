import { createVar } from '@vanilla-extract/css'

export const indicatorOverlap = createVar()
export const strokeWidth = createVar({ syntax: '<length>', inherits: true, initialValue: '0px' })
