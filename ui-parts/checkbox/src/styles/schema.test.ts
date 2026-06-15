import { dirname }              from 'node:path'
import { describe }             from 'node:test'
import { it }                   from 'node:test'
import { fileURLToPath }        from 'node:url'

import { StyleSchemaGenerator } from '@atls-ui-generators/appearance'

import { schema }               from './schema.js'

const currentDir = dirname(fileURLToPath(import.meta.url))

describe('checkbox styles schema', () => {
  it('should match generated files', async () => {
    await new StyleSchemaGenerator(schema, currentDir).check()
  })
})
