import { UI_ADMIN_URL }              from '@atls-ui/design/constants'
import { UI_PARTS_URL }              from '@atls-ui/design/constants'
import { createDesignStorybookMain } from '@atls-ui/design-storybook/main'
import { designStorybookStories }    from '@atls-ui/design/constants'
import { uiAdminRefTitle }           from '@atls-ui/design/constants'
import { uiPartsRefTitle }           from '@atls-ui/design/constants'

export default createDesignStorybookMain({
  stories: designStorybookStories,
  refs: {
    parts: {
      title: uiPartsRefTitle,
      url: UI_PARTS_URL,
    },
    admin: {
      title: uiAdminRefTitle,
      url: UI_ADMIN_URL,
    },
  },
})
