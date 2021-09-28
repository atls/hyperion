import styled                   from '@emotion/styled'
import { prop }                 from 'styled-tools'
import { ifProp }               from 'styled-tools'

import { execAndSerialize }     from '@atls-ui-parts/styles'

import { createBaseStyles }     from './base'
import { UploadContainerProps } from './upload-container.interface'

const UploadContainer = styled.div<UploadContainerProps>(
  createBaseStyles(),
  ifProp(prop('isDragAccept', false), execAndSerialize(prop('dragAcceptStyles'))),
  ifProp(prop('isDragActive', false), execAndSerialize(prop('dragActiveStyles'))),
  ifProp(prop('isDragReject', false), execAndSerialize(prop('dragRejectStyles')))
)

export { UploadContainer }
