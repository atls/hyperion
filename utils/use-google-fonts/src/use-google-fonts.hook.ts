import { load }      from 'google-fonts-loader'
import { useEffect } from 'react'

import { fonts }     from './fonts.js'

export const useGoogleFonts = (fontFamily: string, fontWeight: number) => {
  useEffect(() => {
    const font = fonts[fontFamily]

    if (font && font.variants.normal && font.variants.normal[fontWeight]) {
      load({ [fontFamily]: [String(fontWeight)] })
    }
  }, [fontFamily, fontWeight])
}
