import React from 'react'
import renderer from 'react-test-renderer'

import { SliceNav } from '../src'

it('should render Slicenav correctly', () => {
    const tree = renderer.create(
        <SliceNav amount={3} backgroundColor={'green'} activeBackgroundColor={'red'} activeFragment={2} />
    )
        .toJSON()

    expect(tree).toMatchSnapshot()
});
