export interface ImportSchema {
  import: string
  from: string
  kind?: 'type' | 'value'
}

export interface ExpressionSchema {
  kind: 'expression'
  value: string
}

export interface StyleDeclarationSchema {
  backgroundColor?: ExpressionSchema
  border?: ExpressionSchema
  borderColor?: ExpressionSchema
  fontColor?: ExpressionSchema
}

export interface StyleExportSchema {
  name: string
  typeName: string
  states: Record<string, string>
}

export interface StyleFileSchema {
  type: 'style'
  target: string
  filename?: string
  createStylesImport?: ImportSchema
  export?: StyleExportSchema
  imports?: Array<ImportSchema>
  prefix: string
  stateOverrides?: Record<string, StyleDeclarationSchema>
  states: Array<string>
  variants: Array<string>
  varsName?: string
}

export interface MapStyleSchema {
  exported?: boolean
  name: string
  properties: Record<string, ExpressionSchema>
}

export interface MapExportSchema {
  name: string
  entries: Record<string, ExpressionSchema>
  typeName?: string
  variants?: Array<string>
  variantsType?: string
}

export interface MapFileSchema {
  type: 'map'
  target: string
  filename?: string
  exports?: Array<MapExportSchema>
  imports?: Array<ImportSchema>
  styles?: Array<MapStyleSchema>
}

export type StyleSchemaFile = MapFileSchema | StyleFileSchema

export interface StyleSchema {
  files: Array<StyleSchemaFile>
}
