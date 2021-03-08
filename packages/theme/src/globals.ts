import { injectGlobal }    from 'emotion'

import { FontFaces }       from './theme'
import { injectFontFaces } from './utils'

export const injectGlobalStyles = (
  html: {} = {},
  body: {} = {
    WebkitFontSmoothing: 'antialiased',
    WebkitOverflowScrolling: 'touch',
    height: '100%',
    margin: 0,
  },
  fontFaces: FontFaces,
  ...rest
) => {
  injectFontFaces(fontFaces)

  injectGlobal({
    html,
    body,
    ...rest,
  })
}
