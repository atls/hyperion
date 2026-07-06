import type { Preview }        from '@storybook/react'

import { colorControlMatcher } from './regex.js'
import { dateControlMatcher }  from './regex.js'

export const designStorybookPreviewModule = '@atls-ui/design-storybook/preview'

export const basePreviewParameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: colorControlMatcher,
      date: dateControlMatcher,
    },
  },
}
