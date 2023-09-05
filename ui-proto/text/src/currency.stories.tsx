import React                             from 'react'

import { Currency as CurrencyComponent } from './index'

export default {
  title: 'Components/Text',
}

export const Currency = (props) => <CurrencyComponent {...props} />

Currency.args = {
  fontWeight: 400,
  color: 'black',
  fontSize: 16,
  amount: 100,
  currency: 'USD',
  locale: 'ru-RU',
  keepZeros: false,
  currencySignPlacement: 'suffix',
  options: {
    maximumFractionDigits: 2,
  },
}

Currency.argTypes = {
  children: {
    name: 'Контент',
    description: 'Основной контент, описание',
  },
  amount: {
    name: 'Сумма',
    description: 'Сумма',
    control: {
      type: 'number',
    },
  },
  currency: {
    name: 'Валюта',
    description: 'Валюта',
    control: {
      type: 'radio',
      options: ['RUB', 'USD', 'EUR'],
    },
  },
  locale: {
    name: 'Локализация',
    description: 'Формат отображения',
    control: {
      type: 'string',
    },
  },
  fontWeight: {
    name: 'Насыщенность шрифта',
    description: 'Насыщенность шрифта текста',
    control: {
      type: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  fontSize: {
    name: 'Размер шрифта',
    description: 'Размер шрифта текста',
  },
  color: {
    name: 'Цвет текста',
    description: 'Цвет текста',
    control: {
      type: 'color',
    },
  },
  keepZeros: {
    name: 'Оставить нули',
    description: 'Показать/спрятать нули',
    control: {
      type: 'boolean',
    },
  },
  currencySignPlacement: {
    name: 'Положение символа валюты',
    description: 'Положение символа валюты',
    control: {
      type: 'select',
      options: ['prefix', 'suffix'],
    },
  },
}
