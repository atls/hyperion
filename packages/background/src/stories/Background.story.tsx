import React          from 'react'

import { Background } from '../index'

const stubImageUrl =
  'https://images.pexels.com/photos/399973/pexels-photo-399973.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-399973.jpg&fm=jpg'

type ExampleProps = {
  backgroundSize: 'cover' | 'contain' | 'auto'
  withImage: boolean
  backgroundColor: any
}

export const ExampleBackground = ({
  backgroundSize,
  backgroundColor,
  withImage = true,
}: ExampleProps) => (
  <Background
    backgroundImage={withImage && `url(${stubImageUrl})`}
    backgroundColor={backgroundColor}
    backgroundSize={backgroundSize}
  />
)

export default {
  title: 'Background',
  component: ExampleBackground,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
