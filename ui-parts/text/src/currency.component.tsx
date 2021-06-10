import React             from 'react'
import { FC }            from 'react'
import { Text }          from './text.component'
import { CurrencyProps } from './currency.interface'

const Currency: FC<CurrencyProps> = ({ amount, currency, ...props }) => (
  <Text {...props}>
    {new Intl.NumberFormat('ru-RU', { style: 'currency', currency })
      .format(amount)
      .replace(',00', '')}
  </Text>
)

Currency.defaultProps = {
  amount: 0,
  currency: 'USD',
}

export { Currency }
