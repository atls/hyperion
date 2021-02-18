import React           from 'react'

import { SliceNav } from '../Slicenav'

export const SliceNavExample = ({
    amount = 3,
    activeFragment = 1,
    width = '300px',
    keepActive = true
                                }) => {

    return (
        <SliceNav
            amount={amount}
            activeFragment={activeFragment}
            width={width}
            activeBackgroundColor={'red'}
            keepActive={keepActive}
        />
    )
}

export default {
    title: 'Navigation',
    component: SliceNavExample,
}
