import { injectGlobal } from '@emotion/css'

type Extension = 'ttf' | 'woff' | 'woff2' | 'otf' | 'eot'

const CSSFormats = {
  ttf: 'truetype',
  woff: 'woff',
  woff2: 'woff2',
  otf: 'opentype',
  eot: 'embedded-opentype',
}

interface FontFace {
  fileName: string
  fileExt: Extension
  src: string | object
  weight: number
  style?: string
}

interface FontFaceFunction {
  (font: FontFace): {
    '@font-face': { fontFamily: string; fontWeight: number; fontStyle: string; src: string }
  }
}

const fontFace: FontFaceFunction = ({ fileName, src, weight, fileExt, style = 'normal' }) => ({
  '@font-face': {
    fontFamily: fileName,
    fontWeight: weight,
    fontStyle: style,
    src: `local('${fileName}'),
          url('${src}') format('${CSSFormats[fileExt]}')`,
  },
})

export const injectFontFaces = (fontFaces: FontFace[]) => {
  fontFaces.forEach((font) => {
    try {
      injectGlobal(fontFace({ ...font }))
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  })
}
