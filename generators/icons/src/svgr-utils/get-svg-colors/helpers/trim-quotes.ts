import { quoteCharacters } from '../config/constants.js'

export const trimQuotes = (value: string): string => {
  const trimmedValue = value.trim()

  const quoteCharacter = quoteCharacters.find((quote) => trimmedValue.startsWith(quote))

  if (!quoteCharacter || !trimmedValue.endsWith(quoteCharacter)) {
    return trimmedValue
  }

  return trimmedValue.slice(quoteCharacter.length, -quoteCharacter.length)
}
