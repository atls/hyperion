import type { ButtonProps } from '@atls-ui-parts/button'
import type { ReactNode }   from 'react'

import { useState }         from 'react'

import { useHover }         from '@atls-utils/use-hover'

import { buttonStyles }     from './styles/index.js'

export const Button = ({
  children,
  icon,
  iconPlacement,
  size = 'huge',
  variant = 'blue',
  disabled,
  ref,
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
