import { styleFn } from 'styled-system'

const createHoverStyles =
  ({ color }): styleFn =>
  ({ theme }) => ({
    '&:hover': {
      color: theme.colors.text[color] ? theme.colors.text[color] : color,
    },
  })

export { createHoverStyles }
