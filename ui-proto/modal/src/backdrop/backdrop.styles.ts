import { CSSObject } from '@emotion/css'

export const baseBackdropStyles: CSSObject = {
  position: 'fixed',
  zIndex: -1,
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
}
