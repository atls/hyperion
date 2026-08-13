import type { AtRule }     from 'csstype'
import type { Properties } from 'csstype'

export type FontFace = AtRule.FontFace

export type TypographyProperties = Pick<
  Properties,
  'fontFamily' | 'fontSize' | 'fontWeight' | 'letterSpacing' | 'lineHeight'
>
