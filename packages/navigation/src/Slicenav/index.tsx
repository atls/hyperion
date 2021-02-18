import React, { FC }     from 'react'

import { Box }           from '@atlantis-lab/layout'

import { ControlsProps } from "../types"
import { Container }     from './Container'
import { Slice }         from './Slice'

export const SliceNav: FC<ControlsProps> = ({
    amount,
    width = '100%',
    height = '100%',
    spaceBetween = 5,
    activeFragment,
    backgroundColor = 'grey',
    activeBackgroundColor = 'green',
    wereActiveBackgroundColor = 'green',
    keepActive = false,
                                          }) => {
    let elements = []

    for (let i = 0; i < amount; i+=1) {
        elements.push(i)
    }

    const purgedWidth = Number(width.replace(/(%|px|vh|rem|em)/,''))

    const sliceWidth = purgedWidth/amount-spaceBetween

    return (
    <Container width={width} height={height}>
        {
            elements.map(element => <Slice
                key={element}
                width={sliceWidth}
                backgroundColor={
                    keepActive
                    ?
                    activeFragment-1>=element ? wereActiveBackgroundColor : backgroundColor
                    :
                    activeFragment-1===element ? activeBackgroundColor : backgroundColor
                }
            />)
        }
    </Container>
        )
}
