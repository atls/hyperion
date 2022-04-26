import { styleFn }               from 'styled-system'

import { CheckAppearanceStyles } from './appearance.interfaces'

export const createCheckAppearanceStyles = ({
    color,
    backgroundColor,
  }: CheckAppearanceStyles): styleFn =>
  () => ({ color, backgroundColor })
