import assert               from 'node:assert/strict'
import { describe }         from 'node:test'
import { it }               from 'node:test'

import { formatPhoneValue } from './format.js'

describe('formatPhoneValue', () => {
  it('formats an international US number', () => {
    assert.equal(formatPhoneValue('+14155552671'), '+1 415 555 2671')
  })

  it('formats an international UK number', () => {
    assert.equal(formatPhoneValue('+442071838750'), '+44 20 7183 8750')
  })

  it('formats a national number only with an explicit default country', () => {
    assert.equal(formatPhoneValue('4155552671', 'US'), '(415) 555-2671')
  })

  it('does not assume Russia for a national number', () => {
    assert.equal(formatPhoneValue('4155552671'), '4155552671')
  })

  it('drops unsupported characters', () => {
    assert.equal(formatPhoneValue('abc+1 (415) 555-2671'), '+1 415 555 2671')
  })

  it('keeps an empty value empty', () => {
    assert.equal(formatPhoneValue(''), '')
  })
})
