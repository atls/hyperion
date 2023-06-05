import { injectGlobal } from '@emotion/css'

interface FontFace {
  family: string
  type: string
  weight: number
}

const fontFace = (family, type, weight, style = 'normal') => {
  const fsFamily = family
  const fsType = type
  let module

  try {
    module = require(`./fonts/${fsFamily}/${fsType}/${family}-${type}.ttf`)
  } catch (e) {
    console.error(e) // eslint-disable-line
    module = false
  }

  if (!module) return ''

  return {
    '@font-face': {
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style,
      src: `local('${family}-${type}'),
          url('${module}') format('ttf')`,
    },
  }
}

export const injectFontFaces = (fontFaces: Array<FontFace> = []) =>
  fontFaces.forEach(({ family, type, weight }) => {
    try {
      injectGlobal(fontFace(family, type, weight))
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  })
