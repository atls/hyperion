import type { FontFace } from './interfaces.js'

export const scienceGothicFontFamily = 'Science Gothic'

const createFontSource = (fileName: string): string =>
  new URL(`../../../assets/fonts/science-gothic/${fileName}`, import.meta.url).toString()

export const scienceGothicFontFaces: Array<FontFace> = [
  {
    fontFamily: scienceGothicFontFamily,
    fontStyle: 'normal',
    fontWeight: 300,
    fontDisplay: 'swap',
    src: `url(${createFontSource('ScienceGothic-300.ttf')}) format('truetype')`,
  },
  {
    fontFamily: scienceGothicFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: `url(${createFontSource('ScienceGothic-400.ttf')}) format('truetype')`,
  },
  {
    fontFamily: scienceGothicFontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontDisplay: 'swap',
    src: `url(${createFontSource('ScienceGothic-500.ttf')}) format('truetype')`,
  },
  {
    fontFamily: scienceGothicFontFamily,
    fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'swap',
    src: `url(${createFontSource('ScienceGothic-600.ttf')}) format('truetype')`,
  },
]
