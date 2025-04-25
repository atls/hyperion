import type { ParagraphProps } from './paragraph.interfaces.js'

export const defaultParagraphProps: ParagraphProps = {
  display: 'inline-flex',
  color: '$text.black',
  fontSize: '$medium',
  fontWeight: '$regular',
  fontFamily: '$primary',
  lineHeight: '$default',
} as const
