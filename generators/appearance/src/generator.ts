/* eslint-disable n/no-sync */

import type { GeneratorOptions }  from './generator.interfaces.js'
import type { StyleSchemaModule } from './generator.interfaces.js'

import assert                     from 'node:assert/strict'
import { lstatSync }              from 'node:fs'
import { dirname }                from 'node:path'
import { resolve }                from 'node:path'
import { pathToFileURL }          from 'node:url'

import { program }                from 'commander'
import { tsImport }               from 'tsx/esm/api'

import { createLogger }           from '@atls-ui-generators/utils'

import { StyleSchemaGenerator }   from './schema/index.js'
import { cliArguments }           from './generator.constants.js'
import { cliName }                from './generator.constants.js'
import { cliOptions }             from './generator.constants.js'
import { errors }                 from './generator.constants.js'
import { loggerName }             from './generator.constants.js'

const logger = createLogger(loggerName)

try {
  program
    .name(cliName)
    .argument('<schema>', cliArguments.schema)
    .option('-c, --check', cliOptions.check)
    .option('-w, --write', cliOptions.write)
    .parse(process.argv)

  const schemaPath = program.args.at(0)
  const { check, write } = program.opts<GeneratorOptions>()

  assert.ok(schemaPath && typeof schemaPath === 'string', errors.schemaPathRequired)
  assert.ok(check !== write, errors.modeRequired)

  const absoluteSchemaPath = resolve(schemaPath)

  assert.ok(lstatSync(absoluteSchemaPath).isFile(), errors.schemaPathFileRequired)

  const schemaModule = (await tsImport(
    pathToFileURL(absoluteSchemaPath).href,
    import.meta.url
  )) as StyleSchemaModule
  const schema = schemaModule.default ?? schemaModule.schema

  assert.ok(schema, errors.schemaExportRequired)

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
