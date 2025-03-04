import type { ColorSchemes }        from './appearance.interfaces.js'

import assert                       from 'node:assert/strict'
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
  const { theme, prefix } = program.opts()

  assert.ok(path && typeof path === 'string', 'Path to save the styles is required')
  assert.ok(theme && typeof theme === 'string', 'Theme colors path is required')
  assert.ok(prefix && typeof prefix === 'string', 'Prefix of color styles is required')

  const absoluteThemePath = join(process.cwd(), theme)

  const exports = processFile(absoluteThemePath)

  const colors = Object.values(exports)?.[0] as ColorSchemes

  const generator = new AppearanceStyleGenerator(prefix, colors)

  const genPath = join(process.cwd(), path)
  await generator.generateFile(genPath)

  logger.info(`Generated into ${genPath}`)
} catch (error) {
  logger.error(error)
}
