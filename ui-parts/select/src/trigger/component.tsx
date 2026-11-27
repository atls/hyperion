import type { ReactNode }             from 'react'

import type { TriggerProps }          from './interfaces.js'

import { assignInlineVars }           from '@vanilla-extract/dynamic'
import { clsx }                       from 'clsx'

import { borderWidths }               from '@atls-ui/theme'

import { triggerAppearanceStyles }    from './styles/appearance/styles.css.js'
import { triggerAppearanceVariables } from './styles/appearance/styles.css.js'
import { triggerBaseStyles }          from './styles/base.css.js'
import { triggerBorderWidth }         from './styles/shape/variables.css.js'
export const Trigger = ({
  shape,
  appearance,
  className,
  style,
  ...props
}: TriggerProps): ReactNode => (
  <button
    {...props}
    type='button'
    className={clsx(triggerBaseStyles, triggerAppearanceStyles, className)}
    style={{
      width: shape.width,
      paddingInline: shape.paddingInline,
      paddingBlock: shape.paddingBlock,
      gap: shape.gap,
      borderRadius: shape.borderRadius,
      ...assignInlineVars({
        [triggerBorderWidth]:
          typeof shape.borderWidth === 'number'
            ? `${shape.borderWidth}px`
            : (shape.borderWidth ?? borderWidths.sm),
      }),
      ...assignInlineVars(triggerAppearanceVariables, appearance),
      ...style,
    }}
  />
)
