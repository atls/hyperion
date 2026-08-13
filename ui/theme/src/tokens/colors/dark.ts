import type { Colors } from './interfaces.js'

export const darkColors: Colors = {
  action: {
    base: '#5F8FFF',
    hover: '#7AA7FF',
    pressed: '#3F74FF',
    disabled: '#5F8FFF',
    subtle: '#394A6B',
  },
  surface: {
    base: '#111111',
    subtle: '#171717',
    muted: '#1F1F1F',
    soft: '#FFFFFF',
    inverse: '#F8F9FF',
  },
  text: {
    primary: '#F2F4F7',
    secondary: '#C9D0DA',
    tertiary: '#9AA3B2',
    muted: '#6B7485',
    inverse: '#121417',
  },
  status: {
    success: '#4AD27F',
    warning: '#F2B84B',
    error: '#FF5C5C',
    info: '#5B8CFF',
  },
  elevation: {
    xs: '#00000059',
    sm: '#00000066',
    md: '#00000073',
    lg: '#00000099',
  },
}
