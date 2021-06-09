import { HTMLAttributes }  from 'react'
import { StyledComponent } from '@emotion/styled'
import { TextProps }       from './text.interfaces'

export interface CurrencyProps
  extends StyledComponent<TextProps, any, HTMLAttributes<HTMLSpanElement>> {
  amount: number
  currency: 'rub' | 'usd' | 'eur' | string
  currencySignatures?: { [key: string]: string }
}
