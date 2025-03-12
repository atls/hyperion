import type { Replacements } from '../../icons.interfaces.js'

export type CreateReplacements = (
  replacementIcons: Record<string, Array<string> | string>
) => Replacements
