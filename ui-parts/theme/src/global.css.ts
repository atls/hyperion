import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body, #__next', {
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: 'antialiased',
  WebkitOverflowScrolling: 'touch',
  height: 'auto',
  scrollBehavior: 'smooth',
})

globalStyle('html, body', {
  overflowX: 'hidden',
})

globalStyle('#__next', {
  display: 'flex',
  flexDirection: 'column',
})
