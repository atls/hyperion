import type { ReactNode }        from 'react'

import type { InputActionProps } from './interfaces.js'

import { inputActionStyles }     from './styles.css.js'

export const InputAction = ({
  children,
  disabled,
  label,
  onClick,
  pressed,
}: InputActionProps): ReactNode => (
  <button
    type='button'
    aria-label={label}
    aria-pressed={pressed}
    className={inputActionStyles}
    disabled={disabled}
    onClick={onClick}
    onMouseDown={(event) => {
      event.preventDefault()
    }}
  >
    {children}
  </button>
)
