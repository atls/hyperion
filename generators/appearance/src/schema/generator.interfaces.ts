export interface StyleSchemaFileGenerator {
  generateFileContent: () => Promise<string>
}
