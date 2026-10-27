import type { PlaceholderShape } from './interfaces.js'

import { style }                 from '@vanilla-extract/css'

import { spacing }               from '@atls-ui/theme/tokens'
import { typography }            from '@atls-ui/theme/tokens'

const iconShapeStyles = {
  md: style({ height: '81px', width: '100px' }),
  lg: style({ height: '98px', width: '120px' }),
}

const titleShapeStyles = {
  md: style(typography.body.sm),
  lg: style(typography.body.md),
}

const descriptionShapeStyles = style(typography.overline)

export const placeholderShapes: Record<'lg' | 'md', PlaceholderShape> = {
  md: {
    description: descriptionShapeStyles,
    gap: spacing.component.xs,
    horizontalMinHeight: '114px',
    icon: iconShapeStyles.md,
    title: titleShapeStyles.md,
  },
  lg: {
    description: descriptionShapeStyles,
    gap: spacing.component.xs,
    horizontalMinHeight: '122px',
    icon: iconShapeStyles.lg,
    title: titleShapeStyles.lg,
  },
}
