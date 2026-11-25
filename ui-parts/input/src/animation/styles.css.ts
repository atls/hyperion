import { createThemeContract } from '@vanilla-extract/css'
export const inputAnimationVariables = createThemeContract({
  unfilled: { duration: null, easing: null },
  filled: { duration: null, easing: null },
  hover: { duration: null, easing: null },
  focused: { duration: null, easing: null },
  loading: { duration: null, easing: null },
})
