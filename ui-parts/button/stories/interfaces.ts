export type ThemeName = 'dark' | 'light'

export interface ButtonStoryProps {
  children: string
  disabled: boolean
  focused: boolean
  fullWidth: boolean
  leadingAddon: boolean
  theme: ThemeName
  trailingAddon: boolean
}
