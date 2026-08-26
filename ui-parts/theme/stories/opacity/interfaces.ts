import type { OpacityTokens } from '@atls-ui/theme/tokens'

export type ThemeName = 'dark' | 'light'
export type OpacityName = keyof OpacityTokens

export interface OpacityStoryProps {
  theme: ThemeName
}
