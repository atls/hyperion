import type { Theme }     from '@atls-ui/theme'

import type { NameShape } from './interfaces.js'
export const nameShapes = {
  default: (theme: Theme): NameShape => ({ typography: theme.typography.body.md }),
}
