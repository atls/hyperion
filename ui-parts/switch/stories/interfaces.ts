export type ThemeName = 'dark' | 'light'

export interface SwitchStoryProps {
  checked: boolean
  disabled: boolean
  focused: boolean
  theme: ThemeName
}
