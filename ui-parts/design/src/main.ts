import { createDesignStorybookMain } from '@atls-ui/design-storybook/main'

import { designStorybookStories }    from './constants.js'

export default createDesignStorybookMain({
  stories: designStorybookStories,
})
