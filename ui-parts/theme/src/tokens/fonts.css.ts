/// <reference path="../assets.d.ts" />

// TODO: Remove legacy typography tokens after components are refactored to @atls-ui/theme typography.
import { globalFontFace }                                  from '@vanilla-extract/css'

import { scienceGothicFontFaces }                          from '@atls-ui/theme/tokens'
import { scienceGothicFontFamily } from '@atls-ui/theme/tokens'
import scienceGothic300                                    from '@atls-ui/theme/assets/fonts/science-gothic/ScienceGothic-300.ttf'
import scienceGothic400                                    from '@atls-ui/theme/assets/fonts/science-gothic/ScienceGothic-400.ttf'
import scienceGothic500                                    from '@atls-ui/theme/assets/fonts/science-gothic/ScienceGothic-500.ttf'
import scienceGothic600                                    from '@atls-ui/theme/assets/fonts/science-gothic/ScienceGothic-600.ttf'

const nunitoSans = 'Nunito Sans'

const scienceGothicSources = {
  300: scienceGothic300,
  400: scienceGothic400,
  500: scienceGothic500,
  600: scienceGothic600,
} as const

scienceGothicFontFaces.forEach((fontFace) => {
  const fontWeight = Number(fontFace.fontWeight) as keyof typeof scienceGothicSources
  const source = scienceGothicSources[fontWeight]

  if (!source) {
    return
  }

  globalFontFace(scienceGothicFontFamily, {
    fontDisplay: fontFace.fontDisplay,
    fontStyle: fontFace.fontStyle,
    fontWeight: fontFace.fontWeight,
    src: `url(${source}) format('truetype')`,
  })
})

globalFontFace(nunitoSans, {
  src: "url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap) format('woff2')",
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

export const fonts = {
  primary: nunitoSans,
}
