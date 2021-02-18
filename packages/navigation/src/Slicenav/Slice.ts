import styled from '@emotion/styled'
import {layout, color, position, border} from "styled-system"

export const Slice = styled.div<any>(() => ({
    transition: '0.35s',
    display: 'flex',
    }),
    layout,
    color,
    position,
    border,
)

Slice.defaultProps = {
    backgroundColor: 'grey',
    height: '2px',
    borderRadius: '8px',
}
