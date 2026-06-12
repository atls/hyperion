/* eslint-disable n/no-sync */

import type { StyleSchema }     from '../../schema/index.js'

import assert                   from 'node:assert/strict'
import { existsSync }           from 'node:fs'
import { mkdtempSync }          from 'node:fs'
import { readFileSync }         from 'node:fs'
import { rmSync }               from 'node:fs'
import { writeFileSync }        from 'node:fs'
import { tmpdir }               from 'node:os'
import { join }                 from 'node:path'
import { after }                from 'node:test'
import { describe }             from 'node:test'
import { it }                   from 'node:test'

import { StyleSchemaGenerator } from '../../schema/index.js'

const dirname = mkdtempSync(join(tmpdir(), 'appearance-schema-'))

const schema: StyleSchema = {
  files: [
    {
      type: 'style',
      target: '.',
      imports: [
        {
          kind: 'type',
          import: '{ FieldAppearance }',
          from: './interfaces.js',
        },
      ],
      prefix: 'field',
      states: ['default', 'disabled'],
      variants: ['primary', 'secondary'],
      export: {
        name: 'fieldAppearances',
        typeName: 'FieldAppearance',
        states: {
          default: 'default',
          disabled: 'disabled',
        },
      },
    },
    {
      type: 'map',
      target: '.',
      filename: 'map.css.ts',
      imports: [
        {
          import: '{ style }',
          from: '@vanilla-extract/css',
        },
      ],
      styles: [
        {
          name: 'root',
          properties: {
            color: {
              kind: 'expression',
              value: "'black'",
            },
          },
        },
      ],
      exports: [
        {
          name: 'map',
          entries: {
            root: {
              kind: 'expression',
              value: 'root',
            },
          },
        },
      ],
    },
  ],
}

describe('style schema generator', () => {
  after(() => {
    if (existsSync(dirname)) rmSync(dirname, { recursive: true })
  })

  it('should write and check schema files', async () => {
    const generator = new StyleSchemaGenerator(schema, dirname)

    await generator.write()
    await generator.check()

    const code = readFileSync(join(dirname, 'appearance.css.ts'), 'utf-8')

    assert.match(code, /field\.primary\.default\.font/)
    assert.match(code, /fieldAppearances/)
  })

  it('should reject drifted files', async () => {
    const generator = new StyleSchemaGenerator(schema, dirname)

    await generator.write()
    writeFileSync(join(dirname, 'map.css.ts'), 'export const map = {}')

    await assert.rejects(async () => generator.check(), /map\.css\.ts is out of date/)
  })
})
