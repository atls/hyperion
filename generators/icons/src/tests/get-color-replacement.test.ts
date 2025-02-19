import assert                  from 'node:assert/strict'
import { describe }            from 'node:test'
import { it }                  from 'node:test'

import { getColorReplacement } from '../get-color-replacement/index.js'

describe('icons generators get-color-replacement util', () => {
  it('should generate replacement without theme paths', () => {
    const replacement = getColorReplacement({ color: '#000000' })

    assert.deepEqual(replacement, {
      '#000000': '{(props.color && vars.colors[props.color]) || props.color || "#000000"}',
    })
  })

  it('should generate replacement with one theme paths', () => {
    const replacement = getColorReplacement({ themePaths: ['icons'], color: '#000000' })

    assert.deepEqual(replacement, {
      '#000000': '{(props.color && vars.colors.icons[props.color]) || props.color || "#000000"}',
    })
  })

  it('should generate replacement with several theme paths', () => {
    const replacement = getColorReplacement({
      themePaths: ['icons', 'primary', 'some'],
      color: '#000000',
    })
    assert.deepEqual(replacement, {
      '#000000':
        '{(props.color && vars.colors.icons.primary.some[props.color]) || props.color || "#000000"}',
    })
  })
})
