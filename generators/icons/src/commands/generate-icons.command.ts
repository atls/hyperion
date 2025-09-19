/* eslint-disable n/no-sync */

import type { Replacements } from '../icons.interfaces.js'

import assert                from 'node:assert/strict'
import { lstatSync }         from 'node:fs'
import path                  from 'node:path'

import { Command }           from 'clipanion'
import { Option }            from 'clipanion'

import { createLogger }      from '@atls-ui-generators/utils'
import { processFile }       from '@atls-ui-generators/utils'

import { svgrBuild }         from '../svgr-utils/index.js'

export class GenerateIconsCommand extends Command {
  static readonly usage = Command.Usage({
    category: 'Icons',
    description: 'Generate icon components from SVG files',
    details: `
      Reads all SVG files from the provided directory and generates icon components into the specified output directory. 
      Optionally applies color replacements.
    `,
    examples: [
      [`Basic example`, `generate-icons ./src/icons -i ./svg`],
      [`With replacements`, `generate-icons ./src/icons -i ./svg -r ./replacements.ts`],
    ],
  })

  private readonly logger = createLogger(GenerateIconsCommand.name)

  private readonly outputPath = Option.String({ name: 'output', required: true })

  private readonly iconsPath = Option.String('-i,--icons', {
    required: true,
    description: 'Path to icons svg directory (required)',
  })

  private readonly replacementsPath = Option.String('-r,--replacements', '', {
    description: 'Path to replacements file (optional)',
  })

  async execute(): Promise<void> {
    try {
      this.logger.info('Starting icons generation...')

      const outputPath = path.resolve(this.outputPath)
      const iconsPath = path.resolve(this.iconsPath)

      this.logger.info(`Resolved paths: output=${outputPath}, icons=${iconsPath}`)

      assert.ok(
        lstatSync(outputPath).isDirectory(),
        'Path to save icons should point to a directory.'
      )
      assert.ok(lstatSync(iconsPath).isDirectory(), 'Icons path should point to a directory')

      let replacements: Replacements = {}

      if (this.replacementsPath) {
        const replacementsPath = path.resolve(this.replacementsPath)

        assert.ok(lstatSync(replacementsPath).isFile(), 'Replacements path should point to a file')

        this.logger.info(`Extract replacements from ${replacementsPath}`)

        const exports = processFile(replacementsPath)

        replacements = Object.values(exports)?.[0] as Replacements
      }

      this.logger.info(`Icon generation started into ${outputPath}`)

      await svgrBuild(iconsPath, outputPath, replacements)

      this.logger.info(`Generated into ${outputPath}`)
    } catch (error) {
      this.logger.error(error)
    }
  }
}
