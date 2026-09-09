import type { AppearanceName } from './constants.js'
import type { ShapeName }      from './constants.js'

export type ThemeName = 'dark' | 'light'

export interface InputStoryProps {
  appearance: AppearanceName
  disabled: boolean
  error: boolean
  helperText: boolean
  leadingAddon: boolean
  placeholder: string
  shape: ShapeName
  theme: ThemeName
  trailingAddon: boolean
}

export interface TextareaStoryProps {
  appearance: AppearanceName
  disabled: boolean
  error: boolean
  helperText: boolean
  placeholder: string
  rows: number
  shape: ShapeName
  theme: ThemeName
}
