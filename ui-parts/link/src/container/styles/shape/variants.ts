import type { ContainerShape } from './interfaces.js'

import { spacing }             from '@atls-ui/theme/tokens'
export const containerShapes = {
  standalone: { display: 'inline-flex', alignItems: 'center', gap: spacing.component.xs },
  inline: { display: 'inline', alignItems: 'baseline', gap: spacing.component.none },
} satisfies Record<string, ContainerShape>
