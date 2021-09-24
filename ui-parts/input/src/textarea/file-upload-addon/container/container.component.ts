import styled                        from '@emotion/styled'

import { createAddonPositionStyles } from '../../position'
import { createBaseStyles }          from './base'

const Container = styled.div(createAddonPositionStyles(), createBaseStyles())

export { Container }
