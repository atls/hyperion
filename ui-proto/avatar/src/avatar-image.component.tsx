import { Image }  from '@radix-ui/react-avatar'

import { styled } from '@atls-ui-proto/core'

export const AvatarImage = styled(Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})
