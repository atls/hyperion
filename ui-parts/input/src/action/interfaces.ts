import type { MouseEventHandler } from 'react'
import type { ReactNode }         from 'react'

export interface InputActionProps {
  children: ReactNode
  disabled?: boolean
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  pressed?: boolean
}
