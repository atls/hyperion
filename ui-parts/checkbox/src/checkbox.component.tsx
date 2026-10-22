import type { ReactNode }              from 'react'
import type { ChangeEvent }            from 'react'

import type { CheckboxProps }          from './checkbox.interfaces.js'
import type { CheckboxSelectionState } from './checkbox.interfaces.js'

import { clsx }                        from 'clsx'
import { useEffect }                   from 'react'
import { useImperativeHandle }         from 'react'
import { useRef }                      from 'react'
import { useState }                    from 'react'
import { useId }                       from 'react'

import { useTheme }                    from '@atls-ui-parts/theme'

import { boxAppearanceStyles }         from './box/index.js'
import { boxBaseStyles }               from './box/index.js'
import { assignCheckboxVariables }     from './box/index.js'
import { createDefaultAppearance }     from './box/index.js'
import { resolveCheckboxAppearance }   from './box/index.js'
import { checkBaseStyles }             from './check/index.js'
import { checkVisibleStyles }          from './check/index.js'
import { containerBaseStyles }         from './container/index.js'
import { containerPositionStyles }     from './container/index.js'
import { hiddenInputStyles }           from './hidden-input/index.js'
import { labelAppearanceStyles }       from './label/index.js'
import { labelPositionStyles }         from './label/index.js'
import { checkboxShapes }              from './styles/index.js'

export const Checkbox = ({
  onChange,
  checked,
  defaultChecked = false,
  disabled,
  indeterminate,
  appearance,
  shape = checkboxShapes.md,
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
  const theme = useTheme()
  const [isChecked, setIsChecked] = useState<boolean>(checked ?? defaultChecked)
  const localChecked = checked ?? isChecked

  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => inputRef.current!, [])

  useEffect(() => {
    const input = inputRef.current
    if (!input) {
      return
    }

    input.indeterminate = indeterminate ?? false
  }, [indeterminate, localChecked])

  const isMarked = indeterminate || localChecked
  let appearanceState: CheckboxSelectionState = 'unchecked'

  if (localChecked) {
    appearanceState = 'checked'
  }

  if (indeterminate) {
    appearanceState = 'indeterminate'
  }

  const defaultAppearance = createDefaultAppearance(theme, shape.box.elevationSize)
  const resolvedAppearance = resolveCheckboxAppearance(
    appearance ?? defaultAppearance,
    appearanceState
  )

  const mark = indeterminate ? indeterminateIcon : checkedIcon

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
        ref={inputRef}
        {...props}
        id={inputId}
        className={clsx(hiddenInputStyles, classNames?.hiddenInput)}
        checked={localChecked}
        disabled={disabled}
        type='checkbox'
        onChange={handleChange}
      />
      <div
        className={clsx(boxBaseStyles, boxAppearanceStyles, shape.box.className, classNames?.box)}
        style={{
          ...assignCheckboxVariables(resolvedAppearance),
          padding: shape.box.padding,
        }}
      >
        <div
          className={clsx(
            checkBaseStyles,
            shape.check,
            isMarked && checkVisibleStyles,
            classNames?.check
          )}
        >
          {mark}
        </div>
      </div>
      <label
        htmlFor={inputId}
        className={clsx(
          shape.label,
          labelAppearanceStyles,
          labelPositionStyles[labelPosition],
          classNames?.label
        )}
      >
        {children}
      </label>
    </div>
  )
}
