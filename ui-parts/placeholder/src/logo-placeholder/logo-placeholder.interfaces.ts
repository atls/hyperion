import { PropsWithChildren } from 'react'

export type LogoPlaceholderType = 'horizontal' | 'vertical'

export interface LogoPlaceholderProps extends PropsWithChildren {
  color?: string
  type?: LogoPlaceholderType
  size?: number
}
