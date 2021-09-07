import { styleFn } from 'styled-system'

const createActiveStyles =
  ({ color }): styleFn =>
  ({ theme }) => ({
    '&:active': {
      color: theme.colors.text[color] ? theme.colors.text[color] : color,
    },
  })

export { createActiveStyles }
