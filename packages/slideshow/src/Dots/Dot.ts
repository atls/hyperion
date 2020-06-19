import styled     from '@emotion/styled'
import { ifProp } from 'styled-tools'

export const Dot = styled.div<any>(
  ({ theme }) => ({
    display: 'flex',
    height: '8px',
    width: '8px',
    borderRadius: '8px',
    backgroundColor: theme.colors.lightGray,
    marginRight: '6px',
  }),
  ifProp('active', ({ theme }) => ({
    backgroundColor: theme.colors.green,
  })),
  ifProp('lastSlide', {
    marginRight: '0px',
  })
)
