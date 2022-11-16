import { styleFn }                    from 'styled-system'

import { createInjectableBaseStyles } from '@atls-ui-parts/datepicker'

const getBaseStyles = (): styleFn => createInjectableBaseStyles()

export { getBaseStyles }
