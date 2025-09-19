/* eslint-disable n/no-sync */

import assert                from 'node:assert/strict'
import fs                    from 'node:fs'
import path                  from 'node:path'

import { Command }           from 'clipanion'
import { Option }            from 'clipanion'

import { createLogger }      from '@atls-ui-generators/utils'

import { buildReplacements } from '../replacement-utils/index.js'

export class GenerateReplacementsCommand extends Command {
  static readonly paths = [['replacements']]

  static readonly usage = Command.Usage({
    category: 'Icons',
    description: 'Generate replacements for icons generator',
    details:
      'Reads all SVG files from the provided directory and generates replacements into the specified output file.',
    examples: [[`Basic example`, `generate-icons replacements ./src/replacements.ts -i ./svg`]],
  })

  private readonly logger = createLogger(GenerateReplacementsCommand.name)

  private readonly outputPath = Option.String({ name: 'output', required: true })

  private readonly iconsPath = Option.String('-i,--icons', {
    required: true,
    description: 'Path to icons svg directory (required)',
  })

  async execute(): Promise<void> {
    try {
      this.logger.info('Starting replacements generation...')

      const outputPath = path.resolve(this.outputPath)
      const outputDir = path.dirname(outputPath)
      const iconsPath = path.resolve(this.iconsPath)

      this.logger.info(`Resolved paths: output=${outputPath}, icons=${iconsPath}`)

      assert.ok(
        fs.existsSync(outputDir) && fs.lstatSync(outputDir).isDirectory(),
        'Directory for output file must exist'
      )
      assert.ok(fs.lstatSync(iconsPath).isDirectory(), 'Icons path should point to a directory')

      await buildReplacements(iconsPath, outputPath)

      this.logger.info(`Generated into ${outputPath}`)
    } catch (error) {
      this.logger.error(error)
    }
  }
}
