/* eslint-disable n/no-sync */

import type { StyleSchema }     from './schema/index.js'

import assert                   from 'node:assert/strict'
import { lstatSync }            from 'node:fs'
import { dirname }              from 'node:path'
import { join }                 from 'node:path'
import { pathToFileURL }        from 'node:url'

import { program }              from 'commander'

import { createLogger }         from '@atls-ui-generators/utils'

import { StyleSchemaGenerator } from './schema/index.js'

const logger = createLogger('appearance-generator')

try {
  program
    .name('Appearance styles generator')
    .argument('<schema>', 'Path to style schema file')
    .option('-c, --check', 'Check generated styles without writing files')
    .option('-w, --write', 'Write generated styles')
    .parse(process.argv)

  const schemaPath = program.args.at(0)
  const { check, write } = program.opts<{ check?: boolean; write?: boolean }>()

  assert.ok(schemaPath && typeof schemaPath === 'string', 'Path to style schema is required')
  assert.ok(check !== write, 'Exactly one of --check or --write is required')

  const absoluteSchemaPath = join(process.cwd(), schemaPath)

  assert.ok(lstatSync(absoluteSchemaPath).isFile(), 'Style schema path should point to a file')

  const schemaModule = (await import(pathToFileURL(absoluteSchemaPath).href)) as {
    default?: StyleSchema
    schema?: StyleSchema
  }
  const schema = schemaModule.default ?? schemaModule.schema

  assert.ok(schema, 'Style schema file should export schema')

  const generator = new StyleSchemaGenerator(schema, dirname(absoluteSchemaPath))

  if (check) {
    logger.info(`Style schema check started for ${schemaPath}`)

    await generator.check()

    logger.info(`Style schema files are up to date for ${schemaPath}`)
  } else {
    logger.info(`Style schema generation started for ${schemaPath}`)

    await generator.write()

    logger.info(`Generated files for ${schemaPath}`)
  }
} catch (error) {
  logger.error(error)
  process.exitCode = 1
}
