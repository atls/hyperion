import type { StorybookConfig }          from '@storybook/react-webpack5'
import type { CompatibleString }         from '@storybook/types'

import { VanillaExtractPlugin }          from '@vanilla-extract/webpack-plugin'
import { NormalModuleReplacementPlugin } from 'webpack'
import { dirname }                       from 'path'
import { join }                          from 'path'
import MiniCssExtractPlugin              from 'mini-css-extract-plugin'

import { UI_ADMIN_URL }                  from '@atls-ui/design/constants'
import { UI_PARTS_URL }                  from '@atls-ui/design/constants'

const getAbsolutePath = (value: string): string =>
  dirname(require.resolve(join(value, 'package.json')))

const config: StorybookConfig = {
  stories: ['**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)', '**/*.mdx'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        plugins: [
          new VanillaExtractPlugin(),
          new MiniCssExtractPlugin(),
          new NormalModuleReplacementPlugin(/\.js$/, (resource: { request: string }) => {
            // eslint-disable-next-line no-param-reassign
            resource.request = resource.request.replace('.js', '')
          }),
        ],
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
    name: getAbsolutePath(
      '@storybook/react-webpack5'
    ) as CompatibleString<'@storybook/react-webpack5'>,
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
    if (webpackConfig?.resolve?.fallback) {
      // eslint-disable-next-line no-param-reassign
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
