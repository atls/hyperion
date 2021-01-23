module.exports = {
  stories: [
    '../packages/**/src/stories/*.story.mdx',
    '../packages/**/src/stories/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
