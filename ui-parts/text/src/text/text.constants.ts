import type { TextProps } from './text.interfaces.js'

export const defaultTextProps: TextProps = {
  display: 'inline-flex',
  color: '$text.black',
  fontSize: '$medium',
  fontWeight: '$regular',
  fontFamily: '$primary',
  lineHeight: '$default',
} as const
