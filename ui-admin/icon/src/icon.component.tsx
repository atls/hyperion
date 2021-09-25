import styled             from '@emotion/styled'

import { ifSpinModifier } from './icon.styles'

const Icon = styled.svg(ifSpinModifier())

export { Icon }
