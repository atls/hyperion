import styled     from '@emotion/styled'

import { ifProp } from 'styled-tools'

interface StyleUploadProps {
  isDragActive?: boolean
  isDragReject?: boolean
  isDragAccept?: boolean
}

const Container = styled.div<StyleUploadProps>(
  ({ theme }: any) => ({
    position: 'relative',
    borderWidth: 2,
    borderStyle: 'dashed',
    cursor: 'pointer',
    outline: 'none',
    borderColor: 'rgba(255, 255, 255, 0.24)',
  }),
  ifProp('isDragActive', ({ theme }: any) => ({
    borderColor: 'green',
  })),
  ifProp('isDragReject', ({ theme }: any) => ({
    borderColor: 'red',
  })),
  ifProp('isDragAccept', ({ theme }: any) => ({
    borderColor: 'blue',
  }))
)

export { Container }
