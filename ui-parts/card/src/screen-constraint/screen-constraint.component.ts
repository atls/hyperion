import styled                         from '@emotion/styled'

import { Box }                        from '@atls-ui-parts/layout'

import { baseScreenConstraintStyles } from './screen-constraint.styles'
import { ScreenConstraintProps }      from './screen-constraint.interface'

const ScreenConstraint = styled(Box)<ScreenConstraintProps>(baseScreenConstraintStyles)

export { ScreenConstraint }
