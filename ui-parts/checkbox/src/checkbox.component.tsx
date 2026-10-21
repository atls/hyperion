import type { ChangeEvent }        from 'react'
import type { ReactNode }          from 'react'

import type { CheckboxProps }      from './checkbox.interfaces.js'

import { clsx }                    from 'clsx'
import { useState }                from 'react'
import { useId }                   from 'react'

import { boxBaseStyles }           from './box/index.js'
import { checkBaseStyles }         from './check/index.js'
import { checkCheckedStyles }      from './check/index.js'
import { containerBaseStyles }     from './container/index.js'
import { containerPositionStyles } from './container/index.js'
import { hiddenInputStyles }       from './hidden-input/index.js'
import { labelPositionStyles }     from './label/index.js'
import { checkboxAppearances }     from './styles/index.js'
import { checkboxShapes }          from './styles/index.js'

export const Checkbox = ({
  onChange,
  checked,
  defaultChecked = false,
  disabled,
  indeterminate,
  appearance = checkboxAppearances.blue,
  shape = checkboxShapes.medium,
  className,
  classNames,
  labelPosition = 'end',
  checkedIcon,
  indeterminateIcon,
  children,
  ref,
  id,
  ...props
}: CheckboxProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(checked ?? defaultChecked)
  const localChecked = checked ?? isChecked

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextChecked = event.currentTarget.checked

    if (checked === undefined) {
      setIsChecked(nextChecked)
    }
    onChange?.(event)
  }

  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div
      className={clsx(
        containerBaseStyles,
        containerPositionStyles[labelPosition],
        classNames?.container,
        className
      )}
    >
      <input
        ref={ref}
        {...props}
        id={inputId}
        className={clsx(hiddenInputStyles, classNames?.hiddenInput)}
        checked={localChecked}
        disabled={disabled}
        type='checkbox'
        onChange={handleChange}
      />
      <div className={clsx(boxBaseStyles, shape.box, appearance.box, classNames?.box)}>
        <div
          className={clsx(
            checkBaseStyles,
            shape.check,
            appearance.check,
            localChecked && checkCheckedStyles,
            classNames?.check
          )}
        >
          {checkedIcon}
        </div>
      </div>
      <label
        htmlFor={inputId}
        className={clsx(
          shape.label,
          appearance.label,
          labelPositionStyles[labelPosition],
          classNames?.label
        )}
      >
        {children}
      </label>
    </div>
  )
}
