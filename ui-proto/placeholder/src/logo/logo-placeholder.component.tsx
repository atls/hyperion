import React                    from 'react'
import { FC }                   from 'react'

import { Layout }               from '@atls-ui-proto/layout'
import { Text }                 from '@atls-ui-proto/text'

import { ImagePlaceholder }     from '../image'
import { LogoPlaceholderProps } from './logo-placeholder.interfaces'

export const LogoPlaceholder: FC<LogoPlaceholderProps> = ({
  type = 'horizontal',
  children = 'Логотип',
  color = 'black',
  size = 32,
}) => (
  <Layout
    flexDirection={type === 'horizontal' ? 'row' : 'column'}
    display='inline-flex'
    alignItems='center'
  >
    <ImagePlaceholder color={color} size={size} />
    <Layout
      ml={type === 'horizontal' ? size * 0.28 : 0}
      mt={type === 'vertical' ? size * 0.28 : 0}
      display='inline-flex'
    >
      <Text color={color} fontWeight={600} fontSize={size * 0.56}>
        {children}
      </Text>
    </Layout>
  </Layout>
)
