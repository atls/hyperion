import type { Meta }                from '@storybook/react'
import type { StoryObj }            from '@storybook/react'

import { Column }                   from '@atls-ui-parts/layout'
import { Layout }                   from '@atls-ui-parts/layout'

import { Currency as BaseCurrency } from '../src/currency/index.js'

interface CurrencyStoryProps {
  fontWeight: number
  fontSize: number
  color: string
  amount: number
  currency: string
  options: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
  locale?: string
  keepZeros?: boolean
  currencySignPlacement?: 'prefix' | 'suffix'
}

const meta: Meta<CurrencyStoryProps> = {
  title: 'Components/Text',
  tags: ['autodocs'],
  argTypes: {
    fontWeight: {
      name: 'Насыщенность шрифта',
      description: 'Насыщенность шрифта текста',
      control: { type: 'inline-radio' },
      options: [400, 500, 600],
    },
    fontSize: {
      name: 'Размер шрифта',
      description: 'Размер шрифта текста',
    },
    color: {
      name: 'Цвет текста',
      description: 'Цвет текста',
      control: { type: 'color' },
    },
    amount: {
      name: 'Сумма',
      description: 'Сумма',
      amount: 100,
      control: { type: 'number' },
    },
    currency: {
      name: 'Валюта',
      description: 'Валюта',
      control: { type: 'inline-radio' },
      options: ['RUB', 'USD', 'EUR'],
    },
    locale: {
      name: 'Локализация',
      description: 'Формат отображения',
    },
    keepZeros: {
      name: 'Оставить нули',
      description: 'Показать/спрятать нули',
      control: { type: 'boolean' },
    },
    currencySignPlacement: {
      name: 'Положение символа валюты',
      description: 'Положение символа валюты',
      control: { type: 'inline-radio' },
      options: ['prefix', 'suffix'],
    },
  },
}

export default meta

export const Currency: StoryObj<CurrencyStoryProps> = {
  render: ({ fontWeight, fontSize, color, ...props }) => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <BaseCurrency style={{ fontWeight, fontSize, color }} {...props} />
      <Layout flexBasis='50px' />
    </Column>
  ),
  args: {
    fontWeight: 400,
    color: 'black',
    fontSize: 16,
    amount: 100,
    currency: 'USD',
    locale: 'ru-RU',
    keepZeros: false,
    currencySignPlacement: 'suffix',
    options: { maximumFractionDigits: 2 },
  },
}
