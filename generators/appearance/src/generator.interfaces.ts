import type { StyleSchema } from './schema/index.js'

export interface GeneratorOptions {
  check?: boolean
  write?: boolean
}

export interface StyleSchemaModule {
  default?: StyleSchema
  schema?: StyleSchema
}
