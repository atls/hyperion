import React  from 'react'

import styled from '@emotion/styled'

const Container = styled.label(({ theme }: any) => ({
  display: 'flex',
  position: 'relative',
  paddingLeft: 23,
  cursor: 'pointer',
  userSelect: 'none',
  '&:hover input ~ div': {
    backgroundColor: theme.colors.mountainmist,
  },
  '& input:checked ~ div': {
    backgroundColor: theme.colors.mountainmist,
  },
  '& input:checked ~ div:after': {
    display: 'block',
  },
}))

const Input = styled.input({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
})

const CheckMark = styled.div(
  ({
    theme,
    width,
    height,
    borderRadius,
    markColor,
    markBorderWidth,
    markWidth,
    markHeight,
  }: any) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: width || 18,
    height: height || 18,
    boxSizing: 'border-box',
    borderRadius: theme.radii[borderRadius] || theme.radii.small,
    backgroundColor: theme.colors.alto,
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',
      left: 6,
      top: 1,
      width: markWidth || 5,
      height: markHeight || 10,
      border: (markColor && `solid ${theme.colors[markColor]}`) || 'solid white',
      borderWidth: (markWidth && `0 ${markBorderWidth} ${markBorderWidth} 0`) || '0 2px 2px 0',
      transform: 'rotate(45deg)',
    },
  }),
)

export const Checkbox = ({ children, ...props }) => (
  <Container {...props}>
    {children}
    <Input
      type='checkbox'
      onChange={({ target }) => props.onChange && props.onChange(target.value)}
      {...props}
    />
    <CheckMark {...props} />
  </Container>
)
