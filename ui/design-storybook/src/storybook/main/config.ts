import type { StorybookConfig }         from '@storybook/react-webpack5'

import type { DesignStorybookConfig }   from '../../config/index.js'
import type { WebpackConfig }           from './interfaces.js'

import { toPackageDir }                 from '../../lib/package-dir/package-dir.js'
import { createDesignStorybookAddons }  from '../addons/index.js'
import { javascriptExtension }          from './constants.js'
import { javascriptExtensionAlias }     from './constants.js'
import { storybookReactWebpackPackage } from './constants.js'
import { webpackFallbacks }             from './constants.js'

const applyBaseWebpackConfig = (webpackConfig: WebpackConfig): WebpackConfig => {
  webpackConfig.resolve = {
    ...webpackConfig.resolve,
    extensionAlias: {
      ...webpackConfig.resolve?.extensionAlias,
      [javascriptExtension]: javascriptExtensionAlias,
    },
  }

  webpackConfig.resolve.fallback = {
    ...webpackConfig.resolve.fallback,
    ...webpackFallbacks,
  }

  return webpackConfig
}

export const createDesignStorybookMain = ({
  addons = [],
  refs,
  stories,
  webpackFinal,
}: DesignStorybookConfig): StorybookConfig => ({
  stories,
  addons: [...createDesignStorybookAddons(), ...addons],
  framework: {
    name: toPackageDir(storybookReactWebpackPackage),
    options: {},
  },
  refs,
  webpackFinal: async (webpackConfig, options) => {
    const baseWebpackConfig = applyBaseWebpackConfig(webpackConfig)

    return webpackFinal ? webpackFinal(baseWebpackConfig, options) : baseWebpackConfig
  },
})
