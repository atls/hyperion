import React             from 'react'

import { ThemeProvider } from '@atls-ui-admin/theme'

const withThemeProvider = (Story, context) => (
  <ThemeProvider mode={context.globals.theme}>
    <Story {...context} />
  </ThemeProvider>
)

export const decorators = [withThemeProvider]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
}

export const parameters = {
  controls: { expanded: true },
  layout: 'centered',
}
