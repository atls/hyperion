import { styleFn } from 'styled-system'

export const createContainerPositionStyles = (): styleFn => () => ({
  flexDirection: 'column',
})

export const createAddonPositionStyles =
  (): styleFn =>
  ({ paddingLeft }) => ({})
