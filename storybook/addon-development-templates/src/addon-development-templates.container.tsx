import React                              from 'react'

import { AddonDevelopmentTemplatesPanel } from './addon-development-templates.panel'

const AddonDevelopmentTemplatesContainer = ({ active }) => {
  if (!active) {
    return null
  }

  return <AddonDevelopmentTemplatesPanel />
}

export { AddonDevelopmentTemplatesContainer }
