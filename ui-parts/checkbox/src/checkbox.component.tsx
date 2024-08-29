/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import type { CheckboxProps }      from './checkbox.interfaces.js'

import { clsx }                    from 'clsx'
import { useEffect }               from 'react'
import { forwardRef }              from 'react'
import { useState }                from 'react'
import React                       from 'react'

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

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((
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
  const [isChecked, setIsChecked] = useState<boolean>(active)

  useEffect(() => {
    setIsChecked(active)
    onCheck(active)
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [active])

  const handleCheck = (): void => {
    setIsChecked(!isChecked)
    onCheck(!isChecked)
  }

  return (
    <div
      ref={ref}
      className={clsx(containerBaseStyles, containerPositionStyles[labelPosition])}
      onClick={handleCheck}
      {...props}
    >
      <input
        className={hiddenInputStyles}
        checked={isChecked}
        type='checkbox'
        onChange={handleCheck}
      />
      <div className={clsx(boxBaseStyles, boxShapeStyles[size], boxColorStyles[color])}>
        <div className={clsx(checkBaseStyles, isChecked && checkCheckedStyles)}>{icon}</div>
      </div>
      <div
        className={clsx(
          labelShapeStyles,
          labelAppearanceStyles,
          labelPositionStyles[labelPosition]
        )}
      >
        {children}
      </div>
    </div>
  )
})
