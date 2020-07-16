import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

const halfControls = switchProp('halfControls', {
  left: {
    left: '-33px',
  },
  right: {
    right: '-33px',
  },
})

const directions = switchProp('direction', () => ({
  left: {
    left: '20px',
  },
  right: {
    right: '20px',
  },
}))

export const SlideButton = styled.div<any>(
  ({ theme, disabled }: any) => ({
    position: 'absolute',
    top: 'calc(50% - 33px)',
    width: 64,
    height: 64,
    background: theme.colors.white,
    boxSizing: 'border-box',
    borderRadius: '50%',
    boxShadow: theme.shadows.controls,
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
