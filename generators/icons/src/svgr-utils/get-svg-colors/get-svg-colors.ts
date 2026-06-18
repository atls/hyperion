import type { GetSvgColorsOptions }    from './interfaces.js'

import { ATTRIBUTE_NAME_PATTERN }      from './config/regex.js'
import { ATTRIBUTE_PATTERN }           from './config/regex.js'
import { STYLE_PROPERTY_NAME_PATTERN } from './config/regex.js'
import { STYLE_PROPERTY_PATTERN }      from './config/regex.js'
import { valueGroupName }              from './config/constants.js'
import { normalizeAttributeName }      from './helpers/normalize-attribute-name.js'
import { trimQuotes }                  from './helpers/trim-quotes.js'
import { validateColor }               from './helpers/validate-color.js'

const getColorAttributeNames = (options: GetSvgColorsOptions): Set<string> =>
  new Set(Array.from(options.colorAttributes ?? []).map(normalizeAttributeName))

const addAttributeColor = (
  colors: Set<string>,
  source: string,
  colorAttributes: Set<string>
): void => {
  for (const match of source.matchAll(ATTRIBUTE_PATTERN)) {
    const name = match[0].match(ATTRIBUTE_NAME_PATTERN)?.[0]
    const value = match.groups?.[valueGroupName]

    if (name && value && colorAttributes.has(normalizeAttributeName(name))) {
      colors.add(trimQuotes(value))
    }
  }
}

const addStyleColor = (colors: Set<string>, source: string, colorAttributes: Set<string>): void => {
  for (const match of source.matchAll(STYLE_PROPERTY_PATTERN)) {
    const name = match[0].match(STYLE_PROPERTY_NAME_PATTERN)?.[0]
    const value = match.groups?.[valueGroupName]

    if (name && value && colorAttributes.has(normalizeAttributeName(name))) {
      colors.add(trimQuotes(value))
    }
  }
}

export const getSvgColors = (source: string, options: GetSvgColorsOptions = {}): Array<string> => {
  const colors = new Set<string>()
  const colorAttributes = getColorAttributeNames(options)

  addAttributeColor(colors, source, colorAttributes)
  addStyleColor(colors, source, colorAttributes)

  const colorsArray = Array.from(colors)

  return colorsArray.filter((color) => validateColor(color, options))
}
