import path             from 'path'

/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-empty */
import { injectGlobal } from '@emotion/css'

const fontFace = (family, type, weight, fontsPath, style = 'normal') => ({
  '@font-face': {
    fontFamily: family,
    fontWeight: weight,
    fontStyle: style,
    src: `local('${family}-${type}'),
          url('${path.resolve(`${fontsPath}/${family}-${type}.woff`)}') format('woff'),
          url('${path.resolve(`${fontsPath}/${family}-${type}.woff2`)}') format('woff2')`,
  },
})

export const injectFontFaces = (fontFaces = [], fontsPath) =>
  fontFaces.forEach(({ family, type, weight }) => {
    try {
      injectGlobal(fontFace(family, type, weight, fontsPath))
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  })
