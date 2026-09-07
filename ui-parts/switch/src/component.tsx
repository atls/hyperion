import type { MouseEvent }         from 'react'
import type { ReactNode }          from 'react'

import type { SwitchProps }        from './interfaces.js'

import { clsx }                    from 'clsx'
import { useState }                from 'react'

import { useTheme }                from '@atls-ui-parts/theme'

import { appearanceStyles }        from './styles/index.js'
import { assignSwitchVariables }   from './styles/index.js'
import { baseStyles }              from './styles/index.js'
import { checkedThumbStyles }      from './styles/index.js'
import { resolveSwitchAppearance } from './styles/index.js'
import { switchAppearances }       from './styles/index.js'
import { switchShapes }            from './styles/index.js'
import { thumbStyles }             from './styles/index.js'

export const Switch = ({
  appearance = switchAppearances.default,
  checked,
  className,
  defaultChecked = false,
  disabled = false,
  onChange,
  onClick,
  ref,
  shape = switchShapes.sm,
  style,
  ...props
}: SwitchProps): ReactNode => {
  const theme = useTheme()
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const currentChecked = checked ?? internalChecked
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
      style={assignSwitchVariables(resolvedAppearance, currentChecked, shape, theme, style)}
      className={clsx(baseStyles, appearanceStyles, shape, className)}
      onClick={handleClick}
    >
      <span aria-hidden className={clsx(thumbStyles, currentChecked && checkedThumbStyles)} />
    </button>
  )
}
