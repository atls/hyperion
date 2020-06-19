import styled                             from '@emotion/styled'
import { flexbox, layout, space, system } from 'styled-system'

const boxSizing = system({
  boxSizing: true,
})

export const Column = styled.div(layout, space, flexbox, boxSizing)

Column.defaultProps = {
  width: '100%',
  flexDirection: 'column',
  display: 'flex',
}

export const Row = styled.div(layout, space, flexbox, boxSizing)

Row.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
}

export const Layout = styled.div(layout, space, flexbox, boxSizing)

Layout.defaultProps = {
  display: 'flex',
}
