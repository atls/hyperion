import { injectGlobal } from '@emotion/css'

import localFont        from './next-font/local'
import { LocalFont }    from './next-font'

export const injectFontFaces = (fontFaces: LocalFont) => {
  try {
    injectGlobal(localFont(fontFaces).css)
  } catch (error) {
    console.log(error) // eslint-disable-line
  }
}
