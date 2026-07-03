import type { Preview } from '@storybook/react'

export const designStorybookPreviewModule = '@atls-ui/design-storybook/preview'

export const basePreviewParameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}
