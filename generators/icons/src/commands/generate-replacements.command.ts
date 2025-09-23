import path                      from 'node:path'

import { Option }                from 'clipanion'

import { BaseIconsCommand }      from './base-icons.command.js'
import { buildReplacements }     from '../replacement-utils/index.js'
import { writeReplacementsFile } from '../replacement-utils/index.js'
import { discoverIcons }         from '../svgr-utils/index.js'

export class GenerateReplacementsCommand extends BaseIconsCommand {
  static readonly paths = [['replacements']]

  static readonly usage = BaseIconsCommand.Usage({
    description: 'Generate replacements for icons generator',
    details:
      'Reads all SVG files from the provided directory and generates replacements into the specified output file.',
    examples: [[`Basic example`, `generate-icons replacements ./src -i ./svg -f replacements.ts`]],
  })

  private readonly fileName = Option.String('-f,--file-name', 'replacements.ts', {
    description: 'Output file name for generated replacements (default: replacements.ts)',
  })

  async execute(): Promise<void> {
    try {
      this.logger.info('Starting replacements generation...')

      const { iconsPath, outputPath } = this.resolvePaths()

      const outputFilePath = path.resolve(outputPath, this.fileName)

      const icons = await discoverIcons(iconsPath)

      const replacements = await buildReplacements(icons)

      writeReplacementsFile(outputFilePath, replacements)

      this.logger.info(`Generated into ${outputFilePath}`)
    } catch (error) {
      this.logger.error(error)
    }
  }
}
