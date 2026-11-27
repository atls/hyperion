import { style }       from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'
export const iconBaseStyles = style({ display: 'inline-flex', flexShrink: 0, lineHeight: 1 })
globalStyle(`${iconBaseStyles} > svg`, { width: '100%', height: '100%' })
