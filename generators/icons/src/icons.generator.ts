/* eslint-disable n/no-sync */

import type { Replacements } from './icons.interfaces.js'

import assert                from 'node:assert/strict'
import { lstatSync }         from 'node:fs'
import { join }              from 'node:path'

import { program }           from 'commander'

import { createLogger }      from '@atls-ui-generators/utils'
import { processFile }       from '@atls-ui-generators/utils'

import { svgrBuild }         from './svgr-utils/index.js'

const logger = createLogger('icons-generator')

try {
  program
    .name('Icons generator')
    .argument('path <string>', 'Path to save the icons')
    .requiredOption('-i, --icons path <string>', 'Path to icons svg dir')
    .option('-r, --replacements path <string>', 'Path to replacements file')
    .parse(process.argv)

  const path = program.args.at(0)
  const { icons: iconsPath, replacements: replacementsPath } = program.opts()

  assert.ok(path && typeof path === 'string', 'Path to save the icons is required')
  assert.ok(lstatSync(path).isDirectory(), 'Path to save icons should point to a directory.')
  assert.ok(iconsPath && typeof iconsPath === 'string', 'Icons svg path is required')
  assert.ok(lstatSync(iconsPath).isDirectory(), 'Icons path should point to a directory')

  let replacements: Replacements = {}

  if (replacementsPath) {
    assert.ok(typeof replacementsPath === 'string', 'Replacements path should be string')
    assert.ok(lstatSync(replacementsPath).isFile(), 'Replacements path should point to a file')

    logger.info(`Extract replacements from ${replacementsPath}`)

    const absoluteReplacementsPath = join(process.cwd(), replacementsPath)

    const exports = processFile(absoluteReplacementsPath)

    replacements = Object.values(exports)?.[0] as Replacements
  }

  logger.info(`Icon generation started into ${path}`)

  await svgrBuild(iconsPath, path, replacements)

  logger.info(`Generated into ${path}`)
} catch (error) {
  logger.error(error)
}
