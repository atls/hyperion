import type { MouseEventHandler } from 'react'
import type { ReactNode }         from 'react'

import { actionStyles }           from './action.css.js'

export interface InputActionProps {
  children: ReactNode
  disabled?: boolean
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  pressed?: boolean
}

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
    className={actionStyles}
    disabled={disabled}
    onClick={onClick}
    onMouseDown={(event) => {
      event.preventDefault()
    }}
  >
    {children}
  </button>
)
