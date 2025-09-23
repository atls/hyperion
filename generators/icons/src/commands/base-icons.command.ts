/* eslint-disable n/no-sync */

import type { ResolvedIconsPath } from '../icons.interfaces.js'

import assert                     from 'node:assert/strict'
import fs                         from 'node:fs'
import path                       from 'node:path'

import { Command }                from 'clipanion'
import { Option }                 from 'clipanion'

import { createLogger }           from '@atls-ui-generators/utils'

export class BaseIconsCommand extends Command {
  static readonly usage = Command.Usage({ category: 'Icons' })

  readonly logger = createLogger('icons-generator')

  readonly outputPath = Option.String({ name: 'output', required: true })

  readonly iconsPath = Option.String('-i,--icons', {
    required: true,
    description: 'Path to icons svg directory (required)',
  })

  resolvePaths(): ResolvedIconsPath {
    const outputPath = path.resolve(this.outputPath)
    const iconsPath = path.resolve(this.iconsPath)

    this.logger.info(`Resolved paths: output=${outputPath}, icons=${iconsPath}`)

    assert.ok(
      fs.existsSync(outputPath) && fs.lstatSync(outputPath).isDirectory(),
      'Path to save should point to a directory.'
    )

    assert.ok(
      fs.existsSync(iconsPath) && fs.lstatSync(iconsPath).isDirectory(),
      'Icons path should point to a directory'
    )

    return { outputPath, iconsPath }
  }

  async execute(): Promise<void> {
    try {
      this.logger.info('Base icons command')

      this.resolvePaths()
    } catch (error) {
      this.logger.error(error)
    }
  }
}
