import { globalStyle } from '@vanilla-extract/css'

import { inputStyles } from './layout/container.css.js'

globalStyle(
  `${inputStyles}[type="number"]::-webkit-inner-spin-button, ${inputStyles}[type="number"]::-webkit-outer-spin-button`,
  {
    margin: 0,
    WebkitAppearance: 'none',
  }
)

globalStyle(`${inputStyles}[type="number"]`, {
  MozAppearance: 'textfield',
})

globalStyle(`${inputStyles}[type="search"]::-webkit-search-cancel-button`, {
  WebkitAppearance: 'none',
})
