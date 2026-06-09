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
    .option('-c, --check', 'Check generated styles without writing files')
    .option('--vars-from package <string>', 'Module to import vars from', '@ui/theme/theme-css')
    .option(
      '--styles-from package <string>',
      'Module to import createAppearanceStyles from',
      '@atls-ui-generators/appearance/create'
    )
    .option('-s, --states states <string>', 'Comma-separated states to include')
    .parse(process.argv)

  const path = program.args.at(0)
  const {
    check,
    states,
    stylesFrom,
    theme: themePath,
    prefix,
    varsFrom,
  } = program.opts<{
    check?: boolean
    prefix?: string
    states?: string
    stylesFrom: string
    theme?: string
    varsFrom: string
  }>()

  assert.ok(path && typeof path === 'string', 'Path to save the styles is required')
  assert.ok(lstatSync(path).isDirectory(), 'Path to save the styles should point to a directory.')
  assert.ok(themePath && typeof themePath === 'string', 'Theme colors path is required')
  assert.ok(lstatSync(themePath).isFile(), 'Theme colors path should point to a file')
  assert.ok(prefix && typeof prefix === 'string', 'Prefix of color styles is required')

  logger.info(`Extract theme colors from ${themePath}`)

  const absoluteThemePath = join(process.cwd(), themePath)

  const exports = processFile(absoluteThemePath)

  const colors = Object.values(exports)?.[0] as ColorSchemes

  const generator = new AppearanceStyleGenerator(prefix, colors, {
    states: states
      ? states
          .split(',')
          .map((state: string) => state.trim())
          .filter(Boolean)
      : undefined,
    varsImport: { import: '{ vars }', from: varsFrom },
    createAppearanceStylesImport: { import: '{ createAppearanceStyles }', from: stylesFrom },
  })

  const genPath = join(process.cwd(), path)

  if (check) {
    logger.info(`Appearance styles check started for ${path}`)

    await generator.checkFile(genPath)

    logger.info(`Appearance styles are up to date in ${path}`)
  } else {
    logger.info(`Appearance styles generation started into ${path}`)

    await generator.generateFile(genPath)

    logger.info(`Generated into ${path}`)
  }
} catch (error) {
  logger.error(error)
  process.exitCode = 1
}
