import type { TitleProps } from './title.interfaces.js'

export const defaultTitleProps: TitleProps = {
  display: 'inline-flex',
  color: '$text.black',
  fontSize: '$medium',
  fontWeight: '$regular',
  fontFamily: '$primary',
  lineHeight: '$default',
  margin: '$zero',
} as const
