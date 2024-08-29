import type { FontsTokens } from '../index.js'

import { globalFontFace }   from '@vanilla-extract/css'

const nunitoSans = 'Nunito Sans'

globalFontFace(nunitoSans, {
  src: "url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap) format('woff2')",
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

export const fonts: FontsTokens = {
  primary: nunitoSans,
}
