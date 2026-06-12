/* eslint-disable n/no-sync */

import type { StyleSchemaFileGenerator } from './generator.interfaces.js'
import type { StyleSchema }              from './interfaces.js'
import type { StyleSchemaFile }          from './interfaces.js'

import { readFileSync }                  from 'node:fs'
import { writeFileSync }                 from 'node:fs'
import { join }                          from 'node:path'

import { pretty }                        from '@atls-ui-generators/utils'

import { MapGenerator }                  from '../map/generator.js'
import { StyleGenerator }                from '../style/index.js'
import { StyleSchemaFileOutdatedError }  from './file-outdated.error.js'
import { StyleSchemaTargetPathError }    from './target-path.error.js'

const defaultFilename = 'appearance.css.ts'

export class StyleSchemaGenerator {
  constructor(
    private readonly schema: StyleSchema,
    private readonly basePath: string
  ) {}

  async write(): Promise<void> {
    await Promise.all(
      this.schema.files.map(async (fileSchema) => {
        await this.writeFile(fileSchema)
      })
    )
  }

  async check(): Promise<void> {
    await Promise.all(
      this.schema.files.map(async (fileSchema) => {
        await this.checkFile(fileSchema)
      })
    )
  }

  private async writeFile(fileSchema: StyleSchemaFile): Promise<void> {
    const code = await this.getGenerator(fileSchema).generateFileContent()

    writeFileSync(this.getFilePath(fileSchema), code)
  }

  private async checkFile(fileSchema: StyleSchemaFile): Promise<void> {
    const filePath = this.getFilePath(fileSchema)
    const expected = await this.getGenerator(fileSchema).generateFileContent()
    const actual = await pretty(readFileSync(filePath, 'utf-8'))

    if (actual !== expected) {
      throw new StyleSchemaFileOutdatedError(filePath)
    }
  }

  private getFilePath(fileSchema: StyleSchemaFile): string {
    const targetPath = join(this.basePath, fileSchema.target)

    if (targetPath.endsWith('/')) {
      throw new StyleSchemaTargetPathError()
    }

    return join(targetPath, fileSchema.filename ?? defaultFilename)
  }

  private getGenerator(fileSchema: StyleSchemaFile): StyleSchemaFileGenerator {
    if (fileSchema.type === 'map') {
      return new MapGenerator(fileSchema)
    }

    return new StyleGenerator(fileSchema)
  }
}
