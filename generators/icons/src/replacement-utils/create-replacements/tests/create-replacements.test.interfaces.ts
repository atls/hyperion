import type { Replacements } from '../../../icons.interfaces.js'

export interface TestCase {
  replacementIcons: Record<string, Array<string> | string>
  expectedResult?: Replacements
  expectedError?: string
}
