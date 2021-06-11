import { styleFn } from 'styled-system'

export const createOverflowStyles =
  (): styleFn =>
  ({ height }: { height: number | string }) => ({
    height,
    overflow: 'auto',
    hyphens: 'auto',
    alignItems: 'center',
  })
