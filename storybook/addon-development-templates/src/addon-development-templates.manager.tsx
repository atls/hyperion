import React                                  from 'react'
import addons                                 from '@storybook/addons'

import { AddonDevelopmentTemplatesContainer } from './addon-development-templates.container'
import { ADDON_ID, PARAM_KEY }                from './addon-development-templates.contants'

export const register = () => {
  addons.register(ADDON_ID, (api) => {
    addons.addPanel(ADDON_ID, {
      title: 'Development',
      paramKey: PARAM_KEY,
      render: ({ active }) => <AddonDevelopmentTemplatesContainer active={active} />,
    })
  })
}
