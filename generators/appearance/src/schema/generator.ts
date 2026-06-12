/* eslint-disable n/no-sync */

import type { StyleSchemaFileGenerator } from './generator.interfaces.js'
import type { StyleSchema }              from './interfaces.js'
import type { StyleSchemaFile }          from './interfaces.js'

import assert                            from 'node:assert/strict'
import { readFileSync }                  from 'node:fs'
import { writeFileSync }                 from 'node:fs'
import { join }                          from 'node:path'

import { pretty }                        from '@atls-ui-generators/utils'

import { MapGenerator }                  from '../map/generator.js'
import { StyleGenerator }                from '../style/index.js'
import { defaultFilename }               from './generator.constants.js'
import { errors }                        from './generator.constants.js'
import { getOutdatedFileMessage }        from './generator.constants.js'

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

    assert.equal(actual, expected, getOutdatedFileMessage(filePath))
  }

  private getFilePath(fileSchema: StyleSchemaFile): string {
    const targetPath = join(this.basePath, fileSchema.target)

    assert.ok(!targetPath.endsWith('/'), errors.targetPathTrailingSlash)

    return join(targetPath, fileSchema.filename ?? defaultFilename)
  }

  private getGenerator(fileSchema: StyleSchemaFile): StyleSchemaFileGenerator {
    if (fileSchema.type === 'map') {
      return new MapGenerator(fileSchema)
    }

    return new StyleGenerator(fileSchema)
  }
}
