import styled                          from '@emotion/styled'
import { motion }                      from 'framer-motion'

import { createWrapperBaseStyles }     from '@atls-ui-parts/carousel'
import { createWrapperPositionStyles } from '@atls-ui-parts/carousel'

export const Wrapper = styled(motion.div)(createWrapperBaseStyles(), createWrapperPositionStyles())
