/* eslint-disable n/no-sync */

import type { Replacements } from '../icons.interfaces.js'

import assert                from 'node:assert/strict'
import { lstatSync }         from 'node:fs'
import path                  from 'node:path'

import { Option }            from 'clipanion'

import { processFile }       from '@atls-ui-generators/utils'

import { BaseIconsCommand }  from './base-icons.command.js'
import { buildSvgr }         from '../svgr-utils/index.js'

export class GenerateIconsCommand extends BaseIconsCommand {
  static readonly usage = BaseIconsCommand.Usage({
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

  private readonly replacementsPath = Option.String('-r,--replacements', '', {
    description: 'Path to replacements file (optional)',
  })

  async execute(): Promise<void> {
    try {
      this.logger.info('Starting icons generation...')

      const { iconsPath, outputPath } = this.resolvePaths()

      let replacements: Replacements = {}

      if (this.replacementsPath) {
        const replacementsPath = path.resolve(this.replacementsPath)

        assert.ok(lstatSync(replacementsPath).isFile(), 'Replacements path should point to a file')

        this.logger.info(`Extract replacements from ${replacementsPath}`)

        const exports = processFile(replacementsPath)

        replacements = Object.values(exports)?.[0] as Replacements
      }

      this.logger.info(`Icon generation started into ${outputPath}`)

      await buildSvgr(iconsPath, outputPath, replacements)

      this.logger.info(`Generated into ${outputPath}`)
    } catch (error) {
      this.logger.error(error)
    }
  }
}
