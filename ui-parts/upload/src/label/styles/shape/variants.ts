import type { Theme }      from '@atls-ui/theme'

import type { LabelShape } from './interfaces.js'
export const labelShapes = {
  default: (theme: Theme): LabelShape => ({ typography: theme.typography.body.lg }),
}
