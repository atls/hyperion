import type { CSSProperties }          from 'react'
import type { ReactNode }              from 'react'

import type { ButtonProps }            from './button.interfaces.js'
import type { ButtonAppearanceStates } from './styles/interfaces.js'
import type { ButtonShapeProperties }  from './styles/interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'
import { Children }                    from 'react'
import { clsx }                        from 'clsx'

import { useTheme }                    from '@atls-ui-parts/theme'

import { appearanceStyles }            from './styles/appearance.css.js'
import { appearanceVariables }         from './styles/appearance.css.js'
import { buttonAppearances }           from './styles/appearance.js'
import { resolveButtonAppearance }     from './styles/appearance.js'
import { baseStyles }                  from './styles/base.css.js'
import { addonStyles }                 from './styles/layout.css.js'
import { addonsStyles }                from './styles/layout.css.js'
import { contentStyles }               from './styles/layout.css.js'
import { fullWidthContentStyles }      from './styles/layout.css.js'
import { fullWidthStyles }             from './styles/layout.css.js'
import { labelStyles }                 from './styles/layout.css.js'
import { layoutVariables }             from './styles/layout.css.js'
import { leadingAddonStyles }          from './styles/layout.css.js'
import { trailingAddonStyles }         from './styles/layout.css.js'
import { shapeStyles }                 from './styles/shape.css.js'
import { shapeVariables }              from './styles/shape.css.js'
import { buttonShapes }                from './styles/shape.js'
import { resolveButtonShape }          from './styles/shape.js'

const addonSideWidth = (addonCount: number): string => {
  if (addonCount === 0) {
    return '0px'
  }

  return `calc(${[
    ...Array.from({ length: addonCount }, () => shapeVariables.addonSize),
    ...Array.from({ length: addonCount - 1 }, () => shapeVariables.gap),
  ].join(' + ')})`
}

const buttonInlineStyles = (
  appearance: ButtonAppearanceStates,
  shape: ButtonShapeProperties,
  addonCount: number,
  style?: CSSProperties
): CSSProperties => ({
  ...assignInlineVars(appearanceVariables, appearance),
  ...assignInlineVars(shapeVariables, {
    ...shape,
    typography: {
      fontFamily: String(shape.typography.fontFamily ?? 'inherit'),
      fontSize: String(shape.typography.fontSize ?? 'inherit'),
      fontWeight: String(shape.typography.fontWeight ?? 'inherit'),
      letterSpacing: String(shape.typography.letterSpacing ?? 'inherit'),
      lineHeight: String(shape.typography.lineHeight ?? 'inherit'),
    },
  }),
  ...assignInlineVars(layoutVariables, {
    sideGap: addonCount > 0 ? shapeVariables.gap : '0px',
    sideWidth: addonSideWidth(addonCount),
  }),
  ...style,
})

export const Button = ({
  children,
  ref,
  leadingAddon,
  trailingAddon,
  appearance = buttonAppearances.primary,
  className,
  disabled,
  fullWidth = false,
  shape = buttonShapes.md,
  style,
  ...props
}: ButtonProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance = resolveButtonAppearance(appearance, theme)
  const resolvedShape = resolveButtonShape(shape, theme)
  const leadingAddons = Children.toArray(leadingAddon)
  const trailingAddons = Children.toArray(trailingAddon)
  const addonCount = Math.max(leadingAddons.length, trailingAddons.length)

  return (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      {...props}
      style={buttonInlineStyles(resolvedAppearance, resolvedShape, addonCount, style)}
      className={clsx(
        baseStyles,
        appearanceStyles,
        shapeStyles,
        typeof shape === 'string' && shape,
        fullWidth && fullWidthStyles,
        className
      )}
    >
      <span className={clsx(contentStyles, fullWidth && fullWidthContentStyles)}>
        {(fullWidth || leadingAddons.length > 0) && (
          <span
            aria-hidden={leadingAddons.length > 0 ? undefined : true}
            className={clsx(addonsStyles, leadingAddonStyles)}
          >
            {Children.map(leadingAddons, (addon) => (
              <span className={addonStyles}>{addon}</span>
            ))}
          </span>
        )}
        <span className={labelStyles}>{children}</span>
        {(fullWidth || trailingAddons.length > 0) && (
          <span
            aria-hidden={trailingAddons.length > 0 ? undefined : true}
            className={clsx(addonsStyles, trailingAddonStyles)}
          >
            {Children.map(trailingAddons, (addon) => (
              <span className={addonStyles}>{addon}</span>
            ))}
          </span>
        )}
      </span>
    </button>
  )
}
