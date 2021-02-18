import styled             from '@emotion/styled'
import { layout } from 'styled-system'

import { ContainerProps } from '../types'

export const Container = styled.div<ContainerProps>(() => ({
    justifyContent: 'space-between',
    display: 'flex',
    }),
    layout,
    )
