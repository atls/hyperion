import React            from 'react'
import { forwardRef }   from 'react'
import { useState }     from 'react'

import { useHover }     from '@atls-utils/use-hover'

import { ButtonProps }  from './button.interfaces.js'
import { buttonStyles } from './styles/index.js'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  { children, icon, iconPlacement, size = 'huge', variant = 'blue', disabled, ...props },
  ref
) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const [hover, hoverProps] = useHover()
  const onMouseDown = () => setPressed(true)
  const onMouseUp = () => setPressed(false)

  return (
    <button
      ref={ref}
      type='button'
      className={buttonStyles({
        size,
        variant,
        pressed: pressed ? `${variant}Pressed` : undefined,
        hover: hover ? `${variant}Hover` : undefined,
        disabled: disabled ? `${variant}Disabled` : undefined,
      })}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      disabled={disabled}
      {...hoverProps}
      {...props}
    >
      {children}
    </button>
  )
})
