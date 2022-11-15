import { SwitchProps } from '@atls-ui-parts/switch'

export type ToggleSize = 'normal' | 'medium'

export interface ToggleProps extends SwitchProps {
  size?: ToggleSize
}
