import { load }                    from 'cheerio'

import { extractColorFromElement } from './extract-color-from-element.helper.js'
import { validateColor }           from './validate-color.helper.js'

export const getSvgColors = (source: string): Array<string> => {
  const colors = new Set<string>()

  const cheerio = load(source, { xml: true })

  cheerio('*').each((index, element) => {
    const elementColors = extractColorFromElement(cheerio, element)

    elementColors.forEach((color) => colors.add(color))
  })

  return Array.from(colors).filter(validateColor)
}
