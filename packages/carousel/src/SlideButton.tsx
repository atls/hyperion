import { layout, position } from 'styled-system'

import styled               from '@emotion/styled'

export const SlideButton = styled.div<any>(
  ({ theme, isSquareControls, disabled }: any) => ({
    position: 'absolute',
    background: theme.colors.white,
    boxSizing: 'border-box',
    borderRadius: isSquareControls ? '3px' : '50%',
    boxShadow: theme.shadows.controls,
    border: theme.borders.controls,
    zIndex: 9,
    display: disabled ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.35s',
    '&:hover': {
      boxShadow: theme.shadows.woodsmoke,
    },
    '&:active': {
      transform: 'scale(0.9)',
    },
  }),
  position,
  layout,
)

SlideButton.defaultProps = {
  width: '64px',
  height: '64px',
  top: 'calc(50% - 32px)',
}
