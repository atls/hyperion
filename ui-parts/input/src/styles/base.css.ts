import { globalStyle } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

export const baseStyles = style({
  outline: 'none',
  border: '1px solid transparent',
  padding: 0,
  margin: 0,
})

globalStyle(
  `${baseStyles}[type="number"]::-webkit-inner-spin-button, ${baseStyles}[type="number"]::-webkit-outer-spin-button`,
  {
    WebkitAppearance: 'none',
    margin: 0,
  }
)

globalStyle(`${baseStyles}[type="number"]`, {
  MozAppearance: 'textfield',
})
