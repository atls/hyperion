import type { StyleSchema }     from './interfaces.js'
import type { StyleSchemaFile } from './interfaces.js'

import { join }                 from 'node:path'

import { MapGenerator }         from '../map/generator.js'
import { StyleGenerator }       from '../style/index.js'

export class StyleSchemaGenerator {
  constructor(
    private readonly schema: StyleSchema,
    private readonly basePath: string
  ) {}

  async write(): Promise<void> {
    await Promise.all(
      this.schema.files.map(async (fileSchema) => {
        await this.getGenerator(fileSchema).generateFile(
          join(this.basePath, fileSchema.target),
          fileSchema.filename
        )
      })
    )
  }

  async check(): Promise<void> {
    await Promise.all(
      this.schema.files.map(async (fileSchema) => {
        await this.getGenerator(fileSchema).checkFile(
          join(this.basePath, fileSchema.target),
          fileSchema.filename
        )
      })
    )
  }

  private getGenerator(fileSchema: StyleSchemaFile): MapGenerator | StyleGenerator {
    if (fileSchema.type === 'map') {
      return new MapGenerator(fileSchema)
    }

    return new StyleGenerator(fileSchema)
  }
}
