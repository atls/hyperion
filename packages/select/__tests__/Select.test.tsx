import React                        from 'react'
import renderer                     from 'react-test-renderer'
import { IntlProvider }             from 'react-intl'

import { ThemeProvider }            from '@emotion/react'

import { Select as TemplateSelect } from '../src'

describe('test suit for select', () => {
  it('should render Select correctly', () => {
    const defaultTheme = {
      colors: {
        white: '#FFF',
        silver: 'silver',
        gray: '#333',
        semiGray: '#666',
        black: '#000',
        semiBlack: '#222',
      },
      fontWeight: {
        normal: '600',
      },
      fontSizes: {
        normal: '1rem',
      },
      lineHeights: {
        normal: '30px',
      },
      radii: {
        normal: '50px',
      },
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

    const tree = renderer
      .create(
        <IntlProvider locale='ru'>
          <ThemeProvider theme={defaultTheme}>
            <Select
              options={[
                { id: '1', value: 'first' },
                { id: '2', value: 'second' },
              ]}
            />
          </ThemeProvider>
        </IntlProvider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
