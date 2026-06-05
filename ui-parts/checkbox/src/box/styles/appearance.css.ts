import { style } from '@vanilla-extract/css'

const boxBlueAppearanceStyles = style({
  border: '1px solid blue',
})

const boxGreenAppearanceStyles = style({
  border: '1px solid green',
})

const boxRedAppearanceStyles = style({
  border: '1px solid red',
})

export const boxAppearanceStyles = {
  blue: boxBlueAppearanceStyles,
  green: boxGreenAppearanceStyles,
  red: boxRedAppearanceStyles,
}
