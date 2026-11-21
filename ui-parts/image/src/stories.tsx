import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import type { ImageProps }  from './interfaces.js'

import { Image }            from './component.js'
import { imageAppearances } from './styles/appearance/variants.js'
import { imageShapes }      from './styles/shape/variants.js'
const example = new URL('../assets/example.png', import.meta.url).href
interface ImageStoryProps extends Omit<ImageProps, 'shape'> {
  shape: keyof typeof imageShapes
  fit: 'contain' | 'cover'
}
const meta: Meta<ImageStoryProps> = {
  title: 'Components/Image',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  render: ({ shape = 'default', fit = 'cover', ...props }) => (
    <Image
      {...props}
      shape={{ ...imageShapes[shape], picture: { ...imageShapes[shape].picture, objectFit: fit } }}
    />
  ),
  argTypes: {
    shape: { control: 'select', options: Object.keys(imageShapes) },
    appearance: { control: 'select', options: Object.keys(imageAppearances) },
    fit: { control: 'select', options: ['cover', 'contain'] },
    src: { control: 'text' },
    alt: { control: 'text' },
    isLoading: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'number' },
    errorDescription: { control: 'text' },
    fallback: { control: false },
    errorFallback: { control: false },
    loadingIndicator: { control: false },
    containerProps: { control: false },
  },
}
export default meta
export const Base: StoryObj<ImageStoryProps> = {
  name: 'Базовый',
  args: {
    src: example,
    alt: 'Optimus Prime',
    shape: 'default',
    appearance: 'default',
    fit: 'cover',
    isLoading: false,
    errorDescription: 'Description text',
  },
}
