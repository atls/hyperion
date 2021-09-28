import { styleFn } from 'styled-system'

const createTextareaAddonContainerStyles = (): styleFn => () => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export { createTextareaAddonContainerStyles }
