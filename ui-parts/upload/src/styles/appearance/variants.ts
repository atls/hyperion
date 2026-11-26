import type { Theme }                from '@atls-ui/theme'

import type { UploadAppearance }     from './interfaces.js'

import { linearProgressAppearances } from '@atls-ui-parts/progress'

import { boxAppearances }            from '../../box/styles/appearance/variants.js'
import { iconAppearances }           from '../../icon/styles/appearance/variants.js'
import { labelAppearances }          from '../../label/styles/appearance/variants.js'
export const uploadAppearances = {
  default: (theme: Theme): UploadAppearance => ({
    box: boxAppearances.default(theme),
    icon: iconAppearances.default(theme),
    label: {
      default: labelAppearances.default(theme),
      hover: labelAppearances.default(theme),
      loading: labelAppearances.default(theme),
      error: labelAppearances.default(theme),
    },
    progress: linearProgressAppearances.primary(theme),
  }),
}
