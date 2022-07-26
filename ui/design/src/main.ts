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

module.exports = {
  core: {
    builder: 'webpack5',
  },
  refs: {
    parts: {
      title: 'Parts',
      url: 'https://ui-parts.ui.atls.design',
    },
    proto: {
      title: 'Proto',
      url: 'https://ui-proto.ui.atls.design',
    },
    admin: {
      title: 'Admin',
      url: 'https://ui-admin.ui.atls.design',
    },
  },
  stories: ['./*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback.assert = false

    return updateEmotionAliases(config)
  },
}
