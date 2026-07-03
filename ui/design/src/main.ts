import { UI_ADMIN_URL }              from '@atls-ui/design/constants'
import { UI_PARTS_URL }              from '@atls-ui/design/constants'
import { createDesignStorybookMain } from '@atls-ui/design-storybook/main'

export default createDesignStorybookMain({
  stories: ['**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)', '**/*.mdx'],
  refs: {
    parts: {
      title: 'Parts',
      url: UI_PARTS_URL,
    },
    admin: {
      title: 'Admin',
      url: UI_ADMIN_URL,
    },
  },
})
