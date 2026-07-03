import { createDesignStorybookMain } from '@atls-ui/design-storybook/main'

export default createDesignStorybookMain({
  stories: [
    '../../**/src/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
    '../../**/src/*.mdx',
    '../../**/stories/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
    '../../**/stories/*.mdx',
  ],
})
