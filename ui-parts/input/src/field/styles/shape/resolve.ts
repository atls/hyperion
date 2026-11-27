import type { CSSProperties }   from 'react'

import type { InputFieldShape } from './interfaces.js'

import { assignInlineVars }     from '@vanilla-extract/dynamic'

import { spacing }              from '@atls-ui/theme'
import { borderWidths }         from '@atls-ui/theme'

import { addonSize }            from '../../../styles/shape/variants.css.js'
import { fieldWidth }           from './styles.css.js'
import { unfilledFieldWidth }   from './styles.css.js'
import { fieldBorderWidth }     from './styles.css.js'
const cssWidth = (value: CSSProperties['width']): string =>
  typeof value === 'number' ? `${value}px` : (value ?? 'auto')
export const resolveFieldShape = (shape?: InputFieldShape): CSSProperties =>
  shape
    ? {
        ...assignInlineVars({
          [fieldWidth]: cssWidth(shape.width),
          [addonSize]:
            shape.addonSlotSize === undefined ? undefined : cssWidth(shape.addonSlotSize),
          [unfilledFieldWidth]: cssWidth(shape.unfilledWidth ?? shape.width),
          [fieldBorderWidth]:
            typeof shape.borderWidth === 'number'
              ? `${shape.borderWidth}px`
              : (shape.borderWidth ?? borderWidths.sm),
        }),
        minWidth: spacing.component.none,
        paddingInline: shape.paddingInline,
        paddingBlock: shape.paddingBlock,
        gap: shape.gap,
        borderRadius: shape.borderRadius,
      }
    : {}
