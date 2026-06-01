import type { ReactNode }    from 'react'

import type { ButtonProps }  from './button.interfaces.js'

import { useState }          from 'react'

import { useHover }          from '@atls-utils/use-hover'

import { buttonAppearances } from './styles/appearance.css.js'
import { baseStyles }        from './styles/base.css.js'
import { buttonShapes }      from './styles/shape.css.js'

export const Button = ({
  children,
  ref,
  icon,
  iconPlacement,
  appearance = buttonAppearances.blue,
  className,
  disabled,
  shape = buttonShapes.huge,
  ...props
}: ButtonProps): ReactNode => {
  const [pressed, setPressed] = useState<boolean>(false)
  const [hover, hoverProps] = useHover()

  const onMouseDown = (): void => {
    setPressed(true)
  }

  const onMouseUp = (): void => {
    setPressed(false)
  }

  return (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...hoverProps}
      {...props}
      className={[
        baseStyles,
        appearance.default,
        hover && appearance.hover,
        pressed && appearance.pressed,
        disabled && appearance.disabled,
        shape,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </button>
  )
}
