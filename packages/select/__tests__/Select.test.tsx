import React             from 'react'
import renderer          from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'
import { Option }        from 'rc-select'

import { Select }        from '../src'

describe('test suit for select', () => {
  it('should render select correctly', () => {
    const defaultTheme = {
      colors: {
        white: '#FFF',
        lightBlue: '#00F',
      },
    }

    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Select>
            <Option value='One'>One</Option>
            <Option value='Two'>Two</Option>
          </Select>
        </ThemeProvider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
