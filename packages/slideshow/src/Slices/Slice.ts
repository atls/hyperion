import styled from '@emotion/styled'

export const Slice = styled.div<any>(({ activeWidth }) => ({
  display: 'flex',
  height: '2px',
  position: 'absolute',
  backgroundColor: 'white',
  transition: '0.35s',
  width: `${activeWidth}%`,
}))
