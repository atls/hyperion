import type { MouseEvent }          from 'react'
import type { ReactNode }           from 'react'

import type { SwitchProps }         from './interfaces.js'

import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'
import { useState }                 from 'react'

import { useTheme }                 from '@atls-ui-parts/theme'

import { appearanceStyles }         from './styles/index.js'
import { baseStyles }               from './styles/index.js'
import { checkedCustomThumbStyles } from './styles/index.js'
import { checkedThumbStyles }       from './styles/index.js'
import { customThumbStyles }        from './styles/index.js'
import { resolveSwitchAppearance }  from './styles/index.js'
import { resolveSwitchVariables }   from './styles/index.js'
import { switchAppearances }        from './styles/index.js'
import { switchShapes }             from './styles/index.js'
import { thumbStyles }              from './styles/index.js'

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>((
  {
    appearance = switchAppearances.default,
    checked,
    className,
    defaultChecked = false,
    disabled = false,
    onChange,
    onClick,
    shape = switchShapes.sm,
    style,
    thumb,
    ...props
  }: SwitchProps,
  ref
): ReactNode => {
  const theme = useTheme()
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const currentChecked = checked ?? internalChecked
  const hasCustomThumb = thumb !== undefined
  const resolvedAppearance = resolveSwitchAppearance(appearance, theme)

  const change = (value: boolean): void => {
    if (!disabled) {
      if (checked === undefined) {
        setInternalChecked(value)
      }

      onChange?.(value)
    }
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(event)

    if (!event.defaultPrevented) {
      change(!currentChecked)
    }
  }

  return (
    <button
      type='button'
      {...props}
      ref={ref}
      role='switch'
      aria-checked={currentChecked}
      disabled={disabled}
      style={resolveSwitchVariables(resolvedAppearance, currentChecked, shape, theme, style)}
      className={clsx(baseStyles, appearanceStyles, shape, className)}
      onClick={handleClick}
    >
      <span
        aria-hidden
        className={clsx(
          hasCustomThumb ? customThumbStyles : thumbStyles,
          currentChecked && (hasCustomThumb ? checkedCustomThumbStyles : checkedThumbStyles)
        )}
      >
        {thumb}
      </span>
    </button>
  )
})
