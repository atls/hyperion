import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider, injectGlobalStyles } from '@atlantis-lab/theme'
import { IntlProvider } from 'react-intl'

injectGlobalStyles()

addDecorator(withA11y)
addDecorator(story => (
  <MemoryRouter>
    <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
      <ThemeProvider>{story()}</ThemeProvider>
    </IntlProvider>
  </MemoryRouter>
))

addParameters({
  backgrounds: [{ name: 'default', value: '#f6f6f6', default: true }],
  actions: { argTypesRegex: '^on[A-Z].*' },
})

const loadStories = () => {
  const scopedRequire = require.context('../', true, /^\.\/.+.stor(y|ies)$/)

  scopedRequire.keys().forEach(scopedRequire)
}

configure(loadStories, module)
