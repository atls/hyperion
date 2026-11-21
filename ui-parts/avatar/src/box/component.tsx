import type { CSSProperties }     from 'react'
import type { Ref }               from 'react'

import type { BoxProps }          from './interfaces.js'

import { assignInlineVars }       from '@vanilla-extract/dynamic'
import { clsx }                   from 'clsx'

import { avatarAnimationStyles }  from '../styles/animation.css.js'
import { boxAppearanceStyles }    from './styles/appearance/styles.css.js'
import { boxAppearanceVariables } from './styles/appearance/styles.css.js'
import { boxBaseStyles }          from './styles/base.css.js'
import { boxBorderWidth }         from './styles/base.css.js'
export const Box = ({
  shape,
  appearance,
  clickable,
  disabled,
  children,
  className,
  style,
  ref,
  ...props
}: BoxProps) => {
  const boxProps = {
    ...props,
    'data-clickable': clickable ? '' : undefined,
    'data-disabled': disabled ? '' : undefined,
    className: clsx(boxBaseStyles, boxAppearanceStyles, avatarAnimationStyles, className),
    style: {
      ...assignInlineVars(boxAppearanceVariables, appearance),
      ...assignInlineVars({
        [boxBorderWidth]:
          typeof shape.borderWidth === 'number' ? `${shape.borderWidth}px` : shape.borderWidth,
      }),
      width: shape.size,
      height: shape.size,
      borderRadius: shape.radius,
      ...style,
    } satisfies CSSProperties,
  }
  if (clickable) {
    return (
      <button ref={ref as Ref<HTMLButtonElement>} {...boxProps} disabled={disabled} type='button'>
        {children}
      </button>
    )
  }
  return (
    <span ref={ref} {...boxProps}>
      {children}
    </span>
  )
}
