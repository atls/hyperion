import { style }  from '@vanilla-extract/css'

import { zIndex } from '@atls-ui/theme'

export const containerBaseStyles = style({ zIndex: zIndex.overlay, width: 'max-content' })
