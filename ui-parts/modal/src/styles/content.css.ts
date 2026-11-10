import { globalStyle } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

export const actionsStyles = style({ display: 'flex', flexWrap: 'wrap' })
globalStyle(`${actionsStyles} > *`, { flex: '1 1 0', minWidth: 'max-content' })

export const loadingStyles = style({ display: 'flex', justifyContent: 'center' })
