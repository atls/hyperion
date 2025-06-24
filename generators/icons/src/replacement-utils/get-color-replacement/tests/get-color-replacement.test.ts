import assert                  from 'node:assert/strict'
import { describe }            from 'node:test'
import { it }                  from 'node:test'

import { getColorReplacement } from '../index.js'

describe('icons generators get-color-replacement util', () => {
  it('should generate replacement without theme paths', () => {
    const replacement = getColorReplacement({ color: '#000000' })

    assert.deepEqual(replacement, {
      '#000000': 'currentColor',
    })
  })
})
