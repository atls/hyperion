// @ts-ignore
const updateEmotionAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': require.resolve('@emotion/react'),
      '@emotion/styled': require.resolve('@emotion/styled'),
      '@emotion/styled-base': require.resolve('@emotion/styled'),
      'emotion-theming': require.resolve('@emotion/react'),
    },
  },
})

// @ts-ignore
const storybookConfig = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  features: {
    buildStoriesJson: true,
  },
}

module.exports = {
  ...storybookConfig,
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback.assert = false
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback.events = require.resolve('events/')
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback.url = false

    return updateEmotionAliases(config)
  },
}
