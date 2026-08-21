import type { Preview }               from '@storybook/react'

import type { DesignStorybookConfig } from '../../config/index.js'

import { basePreviewParameters }      from './constants.js'

export const createDesignStorybookPreview = ({
  decorators,
  parameters,
}: Pick<DesignStorybookConfig, 'decorators' | 'parameters'> = {}): Preview => ({
  decorators,
  parameters: {
    ...basePreviewParameters,
    ...parameters,
  },
})
