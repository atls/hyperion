import type { StorybookConfig }         from '@storybook/react-webpack5'

import { createRequire }                from 'node:module'

import { VanillaExtractPlugin }         from '@vanilla-extract/webpack-plugin'
import MiniCssExtractPlugin             from 'mini-css-extract-plugin'

import { toPackageDir }                 from '../../lib/package-dir/package-dir.js'
import { chromaticStorybookAddon }      from './constants.js'
import { cssLoaderTest }                from './constants.js'
import { storybookDocsAddon }           from './constants.js'
import { storybookLinksAddon }          from './constants.js'
import { storybookStylingWebpackAddon } from './constants.js'
import { storybookSwcCompilerAddon }    from './constants.js'
import { vanillaCssExclude }            from './constants.js'
import { vanillaCssLoaderTest }         from './constants.js'

const require = createRequire(import.meta.url)

export const createDesignStorybookAddons = (): NonNullable<StorybookConfig['addons']> => [
  toPackageDir(storybookSwcCompilerAddon),
  toPackageDir(storybookLinksAddon),
  toPackageDir(storybookDocsAddon),
  toPackageDir(chromaticStorybookAddon),
  {
    name: toPackageDir(storybookStylingWebpackAddon),
    options: {
      plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
      rules: [
        {
          test: cssLoaderTest,
          sideEffects: true,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {},
            },
          ],
          exclude: vanillaCssExclude,
        },
        {
          test: vanillaCssLoaderTest,
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
]
