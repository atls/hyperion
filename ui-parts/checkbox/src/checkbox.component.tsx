import type { ReactNode }           from 'react'
import type { ChangeEvent }         from 'react'

import type { CheckboxProps }       from './checkbox.interfaces.js'

import { assignInlineVars }         from '@vanilla-extract/dynamic'
import { clsx }                     from 'clsx'
import { useEffect }                from 'react'
import { useImperativeHandle }      from 'react'
import { useRef }                   from 'react'
import { useState }                 from 'react'
import { useId }                    from 'react'

import { CheckIcon }                from '@atls-ui-parts/icons'
import { MinusIcon }                from '@atls-ui-parts/icons'
import { useTheme }                 from '@atls-ui-parts/theme'

import { boxAppearanceStyles }      from './box/index.js'
import { boxBaseStyles }            from './box/index.js'
import { boxAppearanceVariables }   from './box/index.js'
import { checkAppearanceVariables } from './check/index.js'
import { checkAppearanceStyles }    from './check/index.js'
import { checkBaseStyles }          from './check/index.js'
import { checkVisibleStyles }       from './check/index.js'
import { containerBaseStyles }      from './container/index.js'
import { containerPositionStyles }  from './container/index.js'
import { hiddenInputStyles }        from './hidden-input/index.js'
import { labelAppearanceVariables } from './label/index.js'
import { labelAppearanceStyles }    from './label/index.js'
import { getCheckboxAppearance }    from './styles/index.js'
import { checkboxShapes }           from './styles/index.js'

export const Checkbox = ({
  onChange,
  checked,
  defaultChecked = false,
  disabled,
  indeterminate,
  appearance = 'default',
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
  const stateAppearance = getCheckboxAppearance({
    appearance,
    theme,
    elevationSize: shape.box.elevationSize,
    checked: localChecked,
    indeterminate,
  })

  const mark = indeterminate ? (indeterminateIcon ?? <MinusIcon />) : (checkedIcon ?? <CheckIcon />)

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
      style={{ gap: shape.gap }}
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
          ...assignInlineVars(boxAppearanceVariables, stateAppearance.box),
          padding: shape.box.padding,
        }}
      >
        <div
          style={assignInlineVars(checkAppearanceVariables, stateAppearance.check)}
          className={clsx(
            checkBaseStyles,
            checkAppearanceStyles,
            shape.check,
            isMarked && checkVisibleStyles,
            classNames?.check
          )}
        >
          {mark}
        </div>
      </div>
      <label
        style={assignInlineVars(labelAppearanceVariables, stateAppearance.label)}
        htmlFor={inputId}
        className={clsx(shape.label, labelAppearanceStyles, classNames?.label)}
      >
        {children}
      </label>
    </div>
  )
}
