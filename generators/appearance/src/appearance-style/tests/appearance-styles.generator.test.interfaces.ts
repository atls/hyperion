export interface TestCase {
  prefix: string
  colors: Record<string, string>
  expectedCode?: string
  expectedError?: string
}
