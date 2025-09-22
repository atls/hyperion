import type { CheerioAPI }           from 'cheerio'
import type { AnyNode }              from 'domhandler'

import { STYLE_COLOR_ATTRIBUTE_KEY } from '../../icons.constants.js'
import { colorAttributes }           from '../../icons.constants.js'

export const extractColorFromElement = (cheerio: CheerioAPI, element: AnyNode): Set<string> => {
  const colors = new Set<string>()

  const attributes = cheerio(element).attr() ?? {}

  Object.entries(attributes).forEach(([name, value]) => {
    if (colorAttributes.has(name)) {
      colors.add(value)
    }

    if (name === STYLE_COLOR_ATTRIBUTE_KEY) {
      colorAttributes.forEach((colorAttribute) => {
        colors.add(cheerio(element).css(colorAttribute) || '')
      })
    }
  })

  return colors
}
