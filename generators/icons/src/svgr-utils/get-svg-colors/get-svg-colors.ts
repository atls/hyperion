import type { GetSvgColorsOptions } from './interfaces.js'

import { load }                     from 'cheerio/slim'

import { extractColorFromElement }  from './extract-color-from-element.js'
import { validateColor }            from './helpers/validate-color.js'

export const getSvgColors = (source: string, options: GetSvgColorsOptions = {}): Array<string> => {
  const colors = new Set<string>()

  const cheerio = load(source, { xml: true })

  cheerio('*').each((index, element) => {
    const elementColors = extractColorFromElement(cheerio, element, options)

    elementColors.forEach((color) => colors.add(color))
  })

  const colorsArray = Array.from(colors)

  return colorsArray.filter((color) => validateColor(color, options))
}
