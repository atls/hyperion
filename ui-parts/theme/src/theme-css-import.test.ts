/* eslint-disable n/no-sync */

import assert            from 'node:assert/strict'
import { readFileSync }  from 'node:fs'
import { dirname }       from 'node:path'
import { join }          from 'node:path'
import { describe }      from 'node:test'
import { it }            from 'node:test'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

describe('parts theme css import', () => {
  it('should reference published global css module', () => {
    const source = readFileSync(join(currentDir, 'theme.css.ts'), 'utf-8')

    assert.match(source, /import ['"]\.\/global\.css\.js['"]/)
    assert.doesNotMatch(source, /import ['"]\.\/global\.css['"]/)
  })
})
