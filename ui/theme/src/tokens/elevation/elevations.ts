import type { Colors }           from '../colors/index.js'
import type { ElevationsTokens } from './interfaces.js'

import { shadowBlurs }           from './blurs.js'
import { shadowOffsets }         from './offsets.js'
import { shadowSpreads }         from './spreads.js'
import { createElevation }       from './utils/index.js'

export const elevations = (colors: Colors): ElevationsTokens => ({
  xs: {
    default: createElevation({
      color: colors.elevation.xs,
      offsetY: shadowOffsets.xs,
      blur: shadowBlurs.xs4,
    }),
    hover: createElevation(
      {
        color: colors.elevation.xs,
        offsetY: shadowOffsets.xs,
        blur: shadowBlurs.xs3,
        spread: shadowSpreads.xs,
      },
      {
        color: colors.action.subtle,
        offsetX: shadowOffsets.xs,
        offsetY: shadowOffsets.md,
        blur: shadowBlurs.sm,
        spread: shadowSpreads.negativeSm,
      }
    ),
    pressed: createElevation(
      {
        color: colors.elevation.xs,
        offsetY: shadowOffsets.xs,
        blur: shadowBlurs.xs5,
        inset: true,
      },
      {
        color: colors.elevation.xs,
        offsetY: shadowOffsets.xs,
        blur: shadowBlurs.xs5,
        spread: shadowSpreads.negativeXs,
      }
    ),
    disabled: createElevation({
      color: colors.elevation.xs,
      offsetY: shadowOffsets.xs,
      blur: shadowBlurs.xs5,
    }),
  },
  sm: {
    default: createElevation({
      color: colors.elevation.sm,
      offsetY: shadowOffsets.sm,
      blur: shadowBlurs.sm,
    }),
    hover: createElevation(
      {
        color: colors.elevation.sm,
        offsetY: shadowOffsets.sm,
        blur: shadowBlurs.md,
        spread: shadowSpreads.xs,
      },
      {
        color: colors.action.subtle,
        offsetX: shadowOffsets.xs,
        offsetY: shadowOffsets.lg,
        blur: shadowBlurs.md,
        spread: shadowSpreads.negativeSm,
      }
    ),
    pressed: createElevation(
      {
        color: colors.elevation.sm,
        offsetY: shadowOffsets.xs,
        blur: shadowBlurs.xs4,
        inset: true,
      },
      {
        color: colors.elevation.sm,
        offsetY: shadowOffsets.xs,
        blur: shadowBlurs.xs3,
        spread: shadowSpreads.negativeSm,
      }
    ),
    disabled: createElevation({
      color: colors.elevation.sm,
      offsetY: shadowOffsets.xs,
      blur: shadowBlurs.xs4,
    }),
  },
  md: {
    default: createElevation({
      color: colors.elevation.md,
      offsetY: shadowOffsets.lg,
      blur: shadowBlurs.lg,
    }),
    hover: createElevation(
      {
        color: colors.elevation.md,
        offsetY: shadowOffsets.lg,
        blur: shadowBlurs.xl,
      },
      {
        color: colors.action.subtle,
        offsetX: shadowOffsets.xs,
        offsetY: shadowOffsets.xl,
        blur: shadowBlurs.xl,
        spread: shadowSpreads.negativeLg,
      }
    ),
    pressed: createElevation(
      {
        color: colors.elevation.md,
        offsetY: shadowOffsets.xs,
        blur: shadowBlurs.xs3,
        inset: true,
      },
      {
        color: colors.elevation.md,
        offsetY: shadowOffsets.sm,
        blur: shadowBlurs.sm,
        spread: shadowSpreads.negativeXs,
      }
    ),
    disabled: createElevation({
      color: colors.elevation.md,
      offsetY: shadowOffsets.sm,
      blur: shadowBlurs.xs,
    }),
  },
  lg: {
    default: createElevation({
      color: colors.elevation.lg,
      offsetY: shadowOffsets.xl,
      blur: shadowBlurs.lg,
      spread: shadowSpreads.negativeLg,
    }),
    hover: createElevation(
      {
        color: colors.elevation.lg,
        offsetY: shadowOffsets.xl2,
        blur: shadowBlurs.xl2,
        spread: shadowSpreads.negativeLg,
      },
      {
        color: colors.action.subtle,
        offsetX: shadowOffsets.xs,
        offsetY: shadowOffsets.xl,
        blur: shadowBlurs.md,
        spread: shadowSpreads.negativeXs,
      }
    ),
    pressed: createElevation(
      {
        color: colors.elevation.lg,
        offsetY: shadowOffsets.sm,
        blur: shadowBlurs.xs2,
        inset: true,
      },
      {
        color: colors.elevation.lg,
        offsetY: shadowOffsets.md,
        blur: shadowBlurs.md,
        spread: shadowSpreads.negativeLg,
      }
    ),
    disabled: createElevation({
      color: colors.elevation.lg,
      offsetY: shadowOffsets.md,
      blur: shadowBlurs.sm,
      spread: shadowSpreads.negativeMd,
    }),
  },
  modal: {
    default: createElevation({
      color: colors.elevation.md,
      offsetY: shadowOffsets.xl3,
      blur: shadowBlurs.xl3,
      spread: shadowSpreads.negativeSm,
    }),
  },
})
