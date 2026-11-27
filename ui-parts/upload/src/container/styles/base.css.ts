import { style } from '@vanilla-extract/css'
export const containerStyles = style({
  display: 'inline-flex',
  flexDirection: 'column',
  minWidth: 0,
  boxSizing: 'border-box',
  verticalAlign: 'top',
})
export const filesStyles = style({ display: 'flex', flexDirection: 'column', minWidth: 0 })
