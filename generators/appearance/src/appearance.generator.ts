/* eslint-disable n/no-sync */

import type { ColorSchemes }        from './appearance.interfaces.js'

import assert                       from 'node:assert/strict'
import { lstatSync }                from 'node:fs'
import { join }                     from 'node:path'

import { program }                  from 'commander'

import { createLogger }             from '@atls-ui-generators/utils'
import { processFile }              from '@atls-ui-generators/utils'

import { AppearanceStyleGenerator } from './appearance-style/index.js'

const logger = createLogger('appearance-generator')

try {
  program
    .name('Appearance styles generator')
    .argument('path <string>', 'Path to save the styles')
    .requiredOption('-t, --theme path <string>', 'Path to colors file')
    .requiredOption('-p, --prefix color <string>', 'Prefix of color styles')
    .parse(process.argv)

  const path = program.args.at(0)
  const { theme: themePath, prefix } = program.opts()

  assert.ok(path && typeof path === 'string', 'Path to save the styles is required')
  assert.ok(lstatSync(path).isDirectory(), 'Path to save the styles should point to a directory.')
  assert.ok(themePath && typeof themePath === 'string', 'Theme colors path is required')
  assert.ok(lstatSync(themePath).isFile(), 'Theme colors path should point to a file')
  assert.ok(prefix && typeof prefix === 'string', 'Prefix of color styles is required')

  logger.info(`Extract theme colors from ${themePath}`)

  const absoluteThemePath = join(process.cwd(), themePath)

  const exports = processFile(absoluteThemePath)

  const colors = Object.values(exports)?.[0] as ColorSchemes

  const generator = new AppearanceStyleGenerator(prefix, colors)

  const genPath = join(process.cwd(), path)

  logger.info(`Appearance styles generation started into ${path}`)

  await generator.generateFile(genPath)

  logger.info(`Generated into ${path}`)
} catch (error) {
  logger.error(error)
}
