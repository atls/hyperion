import React                          from 'react'

import { Box }                        from '@atls-ui-proto/layout'

import { BackgroundImagePlaceholder } from './background-image'
import { ImagePlaceholder }           from './image'
import { ImageBoxPlaceholder }        from './image-box'
import { LogoPlaceholder }            from './logo'

export default {
  title: 'Components/Placeholder',
}

export const Placeholder = ({ type, ...props }) => {
  if (type === 'background-image') {
    return (
      <Box position='absolute' top={0} right={0} bottom={0} left={0}>
        <BackgroundImagePlaceholder />
      </Box>
    )
  }

  if (type === 'horizontal-logo') {
    return <LogoPlaceholder {...props} />
  }

  if (type === 'vertical-logo') {
    return <LogoPlaceholder type='vertical' {...props} />
  }

  if (type === 'image-box') {
    return (
      <Box width={320} height={160}>
        <ImageBoxPlaceholder />
      </Box>
    )
  }

  return <ImagePlaceholder {...props} />
}

Placeholder.args = {
  type: 'image',
}

Placeholder.argTypes = {
  type: {
    name: 'Тип',
    description: 'Тип плейсхолдера',
    control: {
      type: 'radio',
      options: ['image', 'image-box', 'background-image', 'horizontal-logo', 'vertical-logo'],
    },
    table: {
      category: 'Варианты',
    },
  },
}
