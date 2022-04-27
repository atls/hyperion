import { injectGlobal } from '@emotion/css'

interface FontFace {
  family: string
  type: string
  weight: number
}

const fontFace = (family, type, weight, style = 'normal') => {
  const fsFamily = family
  const fsType = type

  return {
    '@font-face': {
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style,
      src: `local('${family}-${type}'),
          url('${require(`./fonts/${fsFamily}/${fsType}/${family}-${type}.ttf`)}') format('ttf')`,
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
