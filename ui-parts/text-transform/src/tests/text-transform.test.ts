import assert            from 'node:assert/strict'
import { describe }      from 'node:test'
import { it }            from 'node:test'

import { TextTransform } from '../text-transform.component.js'

describe('TextTransform', () => {
  it('uppercases text', () => {
    assert.equal(TextTransform({ upperCase: true, children: 'Mixed case' }), 'MIXED CASE')
  })

  it('lowercases text', () => {
    assert.equal(TextTransform({ lowerCase: true, children: 'LOWERCASE' }), 'lowercase')
  })

  it('keeps the first letter', () => {
    assert.equal(TextTransform({ firstLetter: true, children: 'word' }), 'w')
  })

  it('keeps the last letter', () => {
    assert.equal(TextTransform({ lastLetter: true, children: 'word' }), 'd')
  })

  it('replaces a substring', () => {
    assert.equal(TextTransform({ replace: ['word', 'replaced'], children: 'word' }), 'replaced')
  })

  it('extracts a substring', () => {
    assert.equal(TextTransform({ substr: [0, 2], children: 'word' }), 'wo')
  })

  it('truncates text with an ellipsis', () => {
    assert.equal(TextTransform({ hideAfter: 10, children: 'long message' }), 'long messa...')
  })
})
