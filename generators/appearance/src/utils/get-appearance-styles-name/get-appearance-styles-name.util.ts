import { getStylesName } from '@atls-ui-generators/utils'

export const getAppearanceStylesName = (variant: string, state: string): string =>
  getStylesName('appearance', variant, state)
