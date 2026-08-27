import type { ReactNode }          from 'react'

import type { ButtonProps }        from './interfaces.js'

import { clsx }                    from 'clsx'

import { useTheme }                from '@atls-ui-parts/theme'

import { Addons }                  from './addons/index.js'
import { appearanceStyles }        from './styles/index.js'
import { assignButtonVariables }   from './styles/index.js'
import { baseStyles }              from './styles/index.js'
import { buttonAppearances }       from './styles/index.js'
import { buttonShapes }            from './styles/index.js'
import { contentStyles }           from './styles/index.js'
import { fullWidthContentStyles }  from './styles/index.js'
import { fullWidthStyles }         from './styles/index.js'
import { isButtonShapeName }       from './styles/index.js'
import { labelStyles }             from './styles/index.js'
import { resolveButtonAppearance } from './styles/index.js'
import { resolveButtonShape }      from './styles/index.js'
import { shapeStyles }             from './styles/index.js'

export const Button = ({
  appearance = buttonAppearances.primary,
  children,
  className,
  fullWidth = false,
  leadingAddon,
  shape = buttonShapes.md,
  style,
  trailingAddon,
  ...props
}: ButtonProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance = resolveButtonAppearance(appearance, theme)
  const resolvedShape = resolveButtonShape(shape, theme)
  const shapeClassName = typeof shape === 'string' && !isButtonShapeName(shape) ? shape : undefined

  return (
    <button
      type='button'
      {...props}
      style={assignButtonVariables(resolvedAppearance, resolvedShape, style)}
      className={clsx(
        baseStyles,
        appearanceStyles,
        resolvedShape && shapeStyles,
        shapeClassName,
        fullWidth && fullWidthStyles,
        className
      )}
    >
      <span className={clsx(contentStyles, fullWidth && fullWidthContentStyles)}>
        <Addons position='leading' reserveSpace={fullWidth}>
          {leadingAddon}
        </Addons>
        <span className={labelStyles}>{children}</span>
        <Addons position='trailing' reserveSpace={fullWidth}>
          {trailingAddon}
        </Addons>
      </span>
    </button>
  )
}
