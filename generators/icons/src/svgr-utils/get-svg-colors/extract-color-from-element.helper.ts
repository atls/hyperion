import type { CheerioAPI }           from 'cheerio'
import type { AnyNode }              from 'domhandler'

import type { GetSvgColorsOptions }  from './get-svg-colors.interfaces.js'

import { STYLE_COLOR_ATTRIBUTE_KEY } from './get-svg-colors.constants.js'

export const extractColorFromElement = (
  cheerio: CheerioAPI,
  element: AnyNode,
  options: GetSvgColorsOptions
): Set<string> => {
  const colors = new Set<string>()

  const attributes = cheerio(element).attr() ?? {}

  Object.entries(attributes).forEach(([name, value]) => {
    if (options.colorAttributes?.has(name)) {
      colors.add(value)
    }

    if (name === STYLE_COLOR_ATTRIBUTE_KEY) {
      options.colorAttributes?.forEach((colorAttribute) => {
        colors.add(cheerio(element).css(colorAttribute) || '')
      })
    }
  })

  return colors
}
