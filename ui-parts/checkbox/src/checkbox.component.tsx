import type { KeyboardEvent }      from 'react'
import type { MouseEvent }         from 'react'
import type { ReactNode }          from 'react'

import type { CheckboxProps }      from './checkbox.interfaces.js'

import { clsx }                    from 'clsx'
import { useEffect }               from 'react'
import { useState }                from 'react'

import { boxBaseStyles }           from './box/index.js'
import { boxShapeStyles }          from './box/index.js'
import { boxColorStyles }          from './box/index.js'
import { checkBaseStyles }         from './check/index.js'
import { checkCheckedStyles }      from './check/index.js'
import { containerBaseStyles }     from './container/index.js'
import { containerPositionStyles } from './container/index.js'
import { hiddenInputStyles }       from './hidden-input/index.js'
import { labelAppearanceStyles }   from './label/index.js'
import { labelPositionStyles }     from './label/index.js'
import { labelShapeStyles }        from './label/index.js'

export const Checkbox = ({
  onCheck,
  children,
  active,
  defaultActive = false,
  labelPosition = 'end',
  size = 'medium',
  color = 'blue',
  icon,
  checkedIcon = icon,
  className,
  classNames,
  onClick,
  onKeyDown,
  ref,
  tabIndex,
  ...props
}: CheckboxProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(active ?? defaultActive)
  const checked = active ?? isChecked

  useEffect(() => {
    if (active !== undefined) {
      setIsChecked(active)
    }
  }, [active])

  const handleCheck = (): void => {
    const nextChecked = !checked

    if (active === undefined) {
      setIsChecked(nextChecked)
    }

    onCheck?.(nextChecked)
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    onClick?.(event)

    if (!event.defaultPrevented) {
      handleCheck()
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    onKeyDown?.(event)

    if (!event.defaultPrevented && event.key === ' ') {
      event.preventDefault()
      handleCheck()
    }
  }

  return (
    <div
      {...props}
      ref={ref}
      role='checkbox'
      aria-checked={checked}
      tabIndex={tabIndex ?? 0}
      className={clsx(
        containerBaseStyles,
        containerPositionStyles[labelPosition],
        classNames?.container,
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <input
        readOnly
        className={clsx(hiddenInputStyles, classNames?.hiddenInput)}
        checked={checked}
        aria-hidden='true'
        tabIndex={-1}
        type='checkbox'
      />
      <div
        className={clsx(
          boxBaseStyles,
          boxShapeStyles[size],
          boxColorStyles[color],
          classNames?.box
        )}
      >
        <div className={clsx(checkBaseStyles, checked && checkCheckedStyles, classNames?.check)}>
          {checkedIcon}
        </div>
      </div>
      <div
        className={clsx(
          labelShapeStyles,
          labelAppearanceStyles,
          labelPositionStyles[labelPosition],
          classNames?.label
        )}
      >
        {children}
      </div>
    </div>
  )
}
