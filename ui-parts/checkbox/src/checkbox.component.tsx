import type { ReactNode }           from 'react'

import type { CheckboxProps }       from './checkbox.interfaces.js'

import { assignInlineVars }         from '@vanilla-extract/dynamic'
import { clsx }                     from 'clsx'
import { useId }                    from 'react'

import { useTheme }                 from '@atls-ui-parts/theme'

import { Check }                    from './check/component.js'
import { boxAppearanceStyles }      from './box/index.js'
import { boxBaseStyles }            from './box/index.js'
import { boxAppearanceVariables }   from './box/index.js'
import { containerBaseStyles }      from './container/index.js'
import { containerPositionStyles }  from './container/index.js'
import { hiddenInputStyles }        from './hidden-input/index.js'
import { useCheckboxInput }         from './hidden-input/useCheckboxInput.js'
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
  style,
  ...props
}: CheckboxProps): ReactNode => {
  const theme = useTheme()
  const input = useCheckboxInput({ checked, defaultChecked, indeterminate, onChange, ref })

  const stateAppearance = getCheckboxAppearance({
    appearance,
    theme,
    elevationSize: shape.box.elevationSize,
    checked: input.checked,
    indeterminate,
  })

  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div
      style={{ gap: shape.gap, ...style }}
      className={clsx(
        containerBaseStyles,
        containerPositionStyles[labelPosition],
        classNames?.container,
        className
      )}
    >
      <input
        {...props}
        id={inputId}
        className={clsx(hiddenInputStyles, classNames?.hiddenInput)}
        {...input.inputProps}
        disabled={disabled}
        type='checkbox'
      />
      <div
        className={clsx(boxBaseStyles, boxAppearanceStyles, shape.box.className, classNames?.box)}
        style={{
          ...assignInlineVars(boxAppearanceVariables, stateAppearance.box),
          padding: shape.box.padding,
        }}
      >
        <Check
          appearance={stateAppearance.check}
          checked={input.checked}
          checkedIcon={checkedIcon}
          className={classNames?.check}
          indeterminate={indeterminate}
          indeterminateIcon={indeterminateIcon}
          shape={shape.check}
        />
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
