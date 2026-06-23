import type { StorybookConfig } from '@storybook/react-webpack5'

import { createRequire }        from 'node:module'
import { dirname }              from 'node:path'
import { join }                 from 'node:path'

import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'
import MiniCssExtractPlugin     from 'mini-css-extract-plugin'

import { UI_ADMIN_URL }         from '@atls-ui/design/constants'
import { UI_PARTS_URL }         from '@atls-ui/design/constants'

const require = createRequire(import.meta.url)

const getAbsolutePath = (value: string): string =>
  dirname(require.resolve(join(value, 'package.json')))

const config: StorybookConfig = {
  stories: ['**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)', '**/*.mdx'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@chromatic-com/storybook'),
    {
      name: getAbsolutePath('@storybook/addon-styling-webpack'),
      options: {
        plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {},
              },
            ],
            exclude: /\.vanilla\.css$/,
          },
          {
            test: /\.vanilla\.css$/i,
            sideEffects: true,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: { url: false },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
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
  webpackFinal: async (webpackConfig) => {
    webpackConfig.resolve = {
      ...webpackConfig.resolve,
      extensionAlias: {
        ...webpackConfig.resolve?.extensionAlias,
        '.js': ['.ts', '.tsx', '.js'],
      },
    }

    if (webpackConfig.resolve.fallback) {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        assert: false,
        url: false,
      }
    }
    return webpackConfig
  },
}

export default config
