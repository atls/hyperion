import type { ReactNode }        from 'react'
import type { Ref }              from 'react'

import type { CardProps }        from './card.interfaces.js'

import { clsx }                  from 'clsx'

import { useTheme }              from '@atls-ui-parts/theme'

import { cardAnimationStyles }   from './styles/index.js'
import { cardAppearanceStyles }  from './styles/index.js'
import { cardBaseStyles }        from './styles/index.js'
import { cardClickableStyles }   from './styles/index.js'
import { cardInteractiveStyles } from './styles/index.js'
import { cardShapes }            from './styles/index.js'
import { getCardAppearance }     from './styles/index.js'

export const Card = ({
  appearance = 'elevated',
  children,
  className,
  clickable = false,
  disabled,
  ref,
  shape = cardShapes.md,
  style,
  ...props
}: CardProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance = getCardAppearance(appearance, theme, shape.elevationSize)
  const cardClassName = clsx(
    cardBaseStyles,
    cardAppearanceStyles,
    shape.className,
    clickable && cardAnimationStyles,
    clickable && cardClickableStyles,
    clickable && cardInteractiveStyles,
    className
  )
  const cardStyle = { ...resolvedAppearance, ...style }

  if (clickable) {
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        {...props}
        className={cardClassName}
        disabled={disabled}
        style={cardStyle}
        type='button'
      >
        {children}
      </button>
    )
  }

  return (
    <div ref={ref as Ref<HTMLDivElement>} {...props} className={cardClassName} style={cardStyle}>
      {children}
    </div>
  )
}
