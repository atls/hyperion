import type { Colors }        from '../colors/index.js'
import type { BordersTokens } from './interfaces.js'

import { borderStyles }       from './constants.js'
import { borderWidths }       from './constants.js'
import { createBorder }       from './utils/index.js'

export const borders = (colors: Colors): BordersTokens => ({
  neutral: {
    default: createBorder(borderWidths.sm, borderStyles.solid, colors.surface.subtle),
    hover: createBorder(borderWidths.sm, borderStyles.solid, colors.surface.muted),
    pressed: createBorder(borderWidths.sm, borderStyles.solid, colors.surface.base),
    focused: createBorder(borderWidths.sm, borderStyles.solid, colors.action.base),
    disabled: createBorder(borderWidths.sm, borderStyles.solid, colors.surface.soft),
  },
  action: {
    default: createBorder(borderWidths.sm, borderStyles.solid, colors.action.base),
    hover: createBorder(borderWidths.sm, borderStyles.solid, colors.action.hover),
    pressed: createBorder(borderWidths.sm, borderStyles.solid, colors.action.pressed),
    focused: createBorder(borderWidths.md, borderStyles.solid, colors.action.base),
    disabled: createBorder(borderWidths.sm, borderStyles.solid, colors.action.disabled),
  },
  danger: {
    default: createBorder(borderWidths.sm, borderStyles.solid, colors.status.error),
    hover: createBorder(borderWidths.sm, borderStyles.solid, colors.status.error),
    pressed: createBorder(borderWidths.sm, borderStyles.solid, colors.status.error),
    focused: createBorder(borderWidths.md, borderStyles.solid, colors.status.error),
    disabled: createBorder(borderWidths.sm, borderStyles.solid, colors.surface.soft),
  },
  dropzone: {
    default: createBorder(borderWidths.sm, borderStyles.dashed, colors.surface.muted),
    hover: createBorder(borderWidths.sm, borderStyles.dashed, colors.action.hover),
    focused: createBorder(borderWidths.md, borderStyles.dashed, colors.action.base),
    disabled: createBorder(borderWidths.sm, borderStyles.dashed, colors.surface.soft),
  },
})
