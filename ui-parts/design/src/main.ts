// @ts-ignore
const updateEmotionAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': require.resolve('@emotion/react'),
      'emotion-theming': require.resolve('@emotion/react'),
    },
  },
})

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    require.resolve('@atls/storybook-addon-development-templates'),
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback.assert = false

    return updateEmotionAliases(config)
  },
}
