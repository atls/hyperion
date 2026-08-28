export type ThemeName = 'dark' | 'light'

export interface InputStoryProps {
  disabled: boolean
  error: boolean
  helperText: boolean
  leadingAddon: boolean
  placeholder: string
  theme: ThemeName
  trailingAddon: boolean
  value?: string
}
