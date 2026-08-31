import type { Colors } from './interfaces.js'

export const lightColors: Colors = {
  action: {
    base: '#1E56C7',
    hover: '#1643A3',
    pressed: '#12357F',
    disabled: '#6B86C8',
    subtle: '#1E56C740',
  },
  surface: {
    base: '#F8F9FF',
    subtle: '#EFF1FF',
    muted: '#D4D8F0',
    soft: '#FFFFFF',
    inverse: '#111111',
  },
  text: {
    primary: '#0C0F1E',
    secondary: '#2A3152',
    tertiary: '#6B7DB3',
    muted: '#9BA8C8',
    inverse: '#FFFFFF',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#60A5FA',
  },
  elevation: {
    xs: '#00000014',
    sm: '#0000001A',
    md: '#0000001F',
    lg: '#0000004D',
  },
}
