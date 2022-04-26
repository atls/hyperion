import styled            from '@emotion/styled'

import React             from 'react'
import { FC }            from 'react'

import { ImageBlock }    from '@atls-ui-parts/image'
import { TextTransform } from '@atls-ui-parts/text-transform'

import { AvatarProps }   from './avatar.interfaces'
import { baseStyles }    from './avatar.styles'
import { shapeStyles }   from './avatar.styles'
import { variantStyles } from './avatar.styles'

export const AvatarElement = styled.div(baseStyles, shapeStyles, variantStyles)

export const Avatar: FC<AvatarProps> = ({ children = '', src, ...props }) => (
  <AvatarElement {...props}>
    {(src && <ImageBlock src={src} alt={children} />) || (
      <TextTransform firstLetter upperCase>
        {children}
      </TextTransform>
    )}
  </AvatarElement>
)
