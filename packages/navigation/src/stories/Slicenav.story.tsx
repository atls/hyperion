import React           from 'react'

import { SliceNav } from '../Slicenav'

export const SliceNavExample = ({
    amount = 3,
    activeFragment = 1,
    width = '300px',
                                }) => {

    return (
        <SliceNav
            amount={amount}
            activeFragment={activeFragment}
            width={width}
            activeBackgroundColor={'red'}
        />
    )
}

export default {
    title: 'Navigation',
    component: SliceNavExample,
}
