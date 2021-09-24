import React                           from 'react'
import { MockedProvider }              from '@apollo/client/testing'

import { DropzonePlaceholder, Upload } from './index'

export default {
  title: 'Components/Upload',
}

export const Base = () => (
  <MockedProvider mocks={[]} addTypename={false}>
    <Upload
      placeholder={
        <DropzonePlaceholder accept='.SVG .PNG .JPG'>Нажмите, чтобы загрузить</DropzonePlaceholder>
      }
    >
      <div style={{ height: 200, width: '100%' }} />
    </Upload>
  </MockedProvider>
)
