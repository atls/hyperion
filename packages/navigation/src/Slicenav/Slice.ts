import styled from '@emotion/styled'
import {layout, color, position} from "styled-system"

export const Slice = styled.div<any>(() => ({
    transition: '0.35s',
    display: 'flex',
    }),
    layout,
    color,
    position,
)

Slice.defaultProps = {
    backgroundColor: 'grey',
    height: '2px'
}
