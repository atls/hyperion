import { style } from '@vanilla-extract/css'

export const labelStyles = style({
  display: 'inline-grid',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  selectors: {
    '&::before': { content: '"100%"', gridArea: '1 / 1', visibility: 'hidden' },
  },
})
export const labelValueStyles = style({ gridArea: '1 / 1', textAlign: 'center' })
