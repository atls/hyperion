import React                       from 'react'
import { forwardRef }              from 'react'
import { useState }                from 'react'

import { CheckboxProps }           from './checkbox.interfaces.js'
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

const CheckboxWithoutRef: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (
  {
    onCheck,
    children,
    active,
    labelPosition = 'end',
    size = 'medium',
    color = 'blue',
    icon,
    ...props
  },
  ref
) => {
  const [isChecked, setIsChecked] = useState(active)

  const handleCheck = () => {
    setIsChecked(!isChecked)
    onCheck(!isChecked)
  }

  const checkStyle = isChecked ? checkCheckedStyles : ''

  return (
    <div
      className={`${containerBaseStyles} ${containerPositionStyles[labelPosition]}`}
      onClick={handleCheck}
      ref={ref}
      {...props}
    >
      <input
        className={hiddenInputStyles}
        checked={isChecked}
        type='checkbox'
        onChange={() => handleCheck()}
      />
      <div className={`${boxBaseStyles} ${boxShapeStyles[size]} ${boxColorStyles[color]}`}>
        <div className={`${checkBaseStyles} ${checkStyle}`}>{icon}</div>
      </div>
      <div
        className={`${labelShapeStyles} ${labelAppearanceStyles} ${labelPositionStyles[labelPosition]}`}
      >
        {children}
      </div>
    </div>
  )
}

export const Checkbox = forwardRef(CheckboxWithoutRef)
