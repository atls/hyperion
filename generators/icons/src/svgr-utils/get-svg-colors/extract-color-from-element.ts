import type { CheerioAPI }          from 'cheerio/slim'
import type { AnyNode }             from 'domhandler'

import type { GetSvgColorsOptions } from './interfaces.js'

import { styleColorAttributeKey }   from './constants.js'

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

    if (name === styleColorAttributeKey) {
      options.colorAttributes?.forEach((colorAttribute) => {
        colors.add(cheerio(element).css(colorAttribute) || '')
      })
    }
  })

  return colors
}
