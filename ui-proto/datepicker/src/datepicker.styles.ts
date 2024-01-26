import { getShapeStyles }      from './styles'
import { getAppearanceStyles } from './styles'
import { getBaseStyles }       from './styles'

export const baseStyles = getBaseStyles()

export const shapeStyles = ({ theme }) => getShapeStyles(theme)

export const appearanceStyles = ({ theme }) => getAppearanceStyles(theme)
