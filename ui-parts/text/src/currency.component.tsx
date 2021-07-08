import React             from 'react'
import { FC }            from 'react'
import styled            from '@emotion/styled'

import { Text }          from './text.component'
import { CurrencyProps } from './currency.interface'

const CurrencyChildren: FC<CurrencyProps> = ({ amount, currency, locale, ...props }) => (
  <span {...props}>
    {new Intl.NumberFormat(locale, { style: 'currency', currency })
      .format(amount)
      .replace(',00', '')}
  </span>
)

const Currency = styled(Text.withComponent(CurrencyChildren))()

Currency.defaultProps = {
  amount: 0,
  currency: 'USD',
  locale: 'ru-RU',
  ...Text.defaultProps,
}

export { Currency }
