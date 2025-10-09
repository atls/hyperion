import type { Meta }                  from '@storybook/react'
import type { StoryObj }              from '@storybook/react'

import { Condition }                  from '@atls-ui-parts/condition'
import { Box }                        from '@atls-ui-parts/layout'
import { Column }                     from '@atls-ui-parts/layout'
import { Layout }                     from '@atls-ui-parts/layout'

import { BackgroundImagePlaceholder } from '../src/background-image-placeholder/index.js'
import { ImageBoxPlaceholder }        from '../src/image-box-placeholder/index.js'
import { ImagePlaceholder }           from '../src/image-placeholder/index.js'
import { LogoPlaceholder }            from '../src/logo-placeholder/index.js'

const placeholderTypes = [
  'image',
  'image-box',
  'background-image',
  'horizontal-logo',
  'vertical-logo',
] as const

type StoryRenderProps = { type: (typeof placeholderTypes)[number] }

const meta: Meta<StoryRenderProps> = {
  title: 'Components/Placeholder',
  render: ({ type }) => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <Condition match={type === 'image'}>
        <ImagePlaceholder />
      </Condition>
      <Condition match={type === 'image-box'}>
        <Box width='320px' height='160px'>
          <ImageBoxPlaceholder />
        </Box>
      </Condition>
      <Condition match={type === 'background-image'}>
        <Box position='absolute' top={0} right={0} bottom={0} left={0}>
          <BackgroundImagePlaceholder />
        </Box>
      </Condition>
      <Condition match={type === 'horizontal-logo'}>
        <LogoPlaceholder type='horizontal' />
      </Condition>
      <Condition match={type === 'vertical-logo'}>
        <LogoPlaceholder type='vertical' />
      </Condition>
      <Layout flexBasis='50px' />
    </Column>
  ),
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'Тип',
      description: 'Тип плейсхолдера',
      control: { type: 'radio' },
      options: placeholderTypes,
      table: { category: 'Варианты' },
    },
  },
}

export default meta

export const Placeholder: StoryObj<StoryRenderProps> = {
  name: 'Базовый',
  args: { type: 'image' },
}
