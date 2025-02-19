/* eslint-disable n/no-sync */

import assert                from 'node:assert/strict'
import { readFileSync }      from 'node:fs'
import { existsSync }        from 'node:fs'
import { describe }          from 'node:test'
import { it }                from 'node:test'

import { mergeLocales }      from '../merge-locales/index.js'
import { removeEmptyLocale } from '../remove-empty-locale/index.js'

describe('Locale processing script mergeLocales', () => {
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

    assert.deepEqual(mergedContent, {
      test_id: 'test_message',
      test_id1: 'test_message1',
    })
  })
  it('should remove empty locale file', () => {
    mergeLocales([''], outputPath)

    const allLocales: Array<string> = []
    const mergedContent = JSON.parse(readFileSync(outputPath, 'utf8'))
    assert.deepEqual(mergedContent, {})
    removeEmptyLocale(
      'generators/locales/src/unit/locales/merged.json',
      'generators/locales/src/unit',
      'locales',
      allLocales
    )
    assert.ok(!existsSync(outputPath))
  })
})
