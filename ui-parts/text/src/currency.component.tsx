import React             from 'react'
import { FC }            from 'react'
import { Text }          from './text.component'
import { CurrencyProps } from './currency.interface'

const builtinSignatures = {
  rub: '\u20BD',
  usd: '$',
  eur: '\u20AC',
}

const Currency: FC<CurrencyProps> = ({ amount, currency, currencySignatures, ...props }) => (
  <Text {...props}>
    {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')}
    {(currencySignatures && currencySignatures[currency]) || currency}
  </Text>
)

Currency.defaultProps = {
  amount: 0,
  currency: 'usd',
  currencySignatures: builtinSignatures,
}

export { Currency }
