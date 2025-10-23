import type { ReactNode }   from 'react'

import type { ButtonProps } from './button.interfaces.js'

import { useState }         from 'react'

import { useHover }         from '@atls-utils/use-hover'

import { buttonStyles }     from './styles/index.js'

export const Button = ({
  children,
  ref,
  icon,
  iconPlacement,
  size = 'huge',
  variant = 'blue',
  disabled,
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
      className={buttonStyles({
        size,
        variant,
        pressed: pressed ? `${variant}Pressed` : undefined,
        hover: hover ? `${variant}Hover` : undefined,
        disabled: disabled ? `${variant}Disabled` : undefined,
      })}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...hoverProps}
      {...props}
    >
      {children}
    </button>
  )
}
