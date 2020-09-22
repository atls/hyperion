import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

const halfControls = switchProp('halfControls', ({ isSquareControls }) => ({
  left: {
    left: isSquareControls ? '-16px' : '-33px',
  },
  right: {
    right: isSquareControls ? '-16px' : '-33px',
  },
}))

const directions = switchProp('direction', () => ({
  left: {
    left: '20px',
  },
  right: {
    right: '20px',
  },
}))

export const SlideButton = styled.div<any>(
  ({ theme, isSquareControls, disabled }: any) => ({
    position: 'absolute',
    top: isSquareControls ? 'calc(50% - 16px)' : 'calc(50% - 33px)',
    width: isSquareControls ? 32 : 64,
    height: isSquareControls ? 32 : 64,
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
    '@media (max-width: 40em)': {
      width: 50,
      height: 50,
    },
  }),
  directions,
  halfControls
)
