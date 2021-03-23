import React                        from 'react'
import { IntlProvider }             from 'react-intl'

import { ThemeProvider }            from '@emotion/react'

import { Select as TemplateSelect } from '..'

const defaultTheme = {
  colors: {
    white: '#FFF',
    silver: 'silver',
    gray: '#333',
    semiGray: '#666',
    black: '#000',
    semiBlack: '#222',
  },
  fontWeight: {},
  fontHeights: {},
  fontSizes: {},
  lineHeights: {},
}

const Select = (props) => (
  <TemplateSelect
    optionsBackground='white'
    optionsBorderRadius='normal'
    optionFontSize='normal'
    optionLineHeight='normal'
    optionFontWeight='normal'
    optionBackgroundColor='semiGray'
    optionHoverBackgroundColor='semiBlack'
    optionActiveBackgroundColor='gray'
    {...props}
  />
)

export const ExampleSelect = () => {
  return (
    <IntlProvider locale='ru'>
      <ThemeProvider theme={defaultTheme}>
        <Select
          options={[
            { id: '1', value: 'first' },
            { id: '2', value: 'second' },
          ]}
        />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default {
  title: 'Select',
  component: ExampleSelect,
}
