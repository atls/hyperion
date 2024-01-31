import { existsSync }        from 'fs'
import { readFileSync }      from 'fs'

import { mergeLocales }      from '../merge-locales'
import { removeEmptyLocale } from '../remove-empty-locale'

describe('Locale processing script', () => {
  describe('mergeLocales', () => {
    const outputFileName = 'merged'
    const outputPath = `generators/locales/src/unit/locales/${outputFileName}.json`

    it('should merge locale files into one', () => {
      mergeLocales(
        [
          'generators/locales/src/unit/mocks/test.json',
          'generators/locales/src/unit/mocks/test1.json',
        ],
        outputPath
      )

      const mergedContent = JSON.parse(readFileSync(outputPath, 'utf8'))
      expect(mergedContent).toEqual({
        test_id: 'test_message',
        test_id1: 'test_message1',
      })
    })
    it('should remove empty locale file', () => {
      mergeLocales([''], outputPath)

      const allLocales = []
      const mergedContent = JSON.parse(readFileSync(outputPath, 'utf8'))
      expect(mergedContent).toEqual({})
      removeEmptyLocale(
        'generators/locales/src/unit/locales/merged.json',
        'generators/locales/src/unit',
        'locales',
        allLocales
      )
      expect(existsSync(outputPath)).toEqual(false)
    })
  })
})
