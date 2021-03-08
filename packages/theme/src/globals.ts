import { injectGlobal }    from 'emotion'

import { FontFaces }       from './theme'
import { injectFontFaces } from './utils'

export const injectGlobalStyles = (
  fontsPath: string,
  fontFaces: FontFaces,
  html: {} = {},
  body: {} = {
    WebkitFontSmoothing: 'antialiased',
    WebkitOverflowScrolling: 'touch',
    height: '100%',
    margin: 0,
  },
  ...rest
) => {
  injectFontFaces(fontFaces, fontsPath)

  injectGlobal({
    html,
    body,
    ...rest,
  })
}
