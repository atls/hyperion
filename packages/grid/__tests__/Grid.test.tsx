import React            from 'react'
import renderer         from 'react-test-renderer'

import { Column, Grid } from '../src/index'

it('Grid should render correctly', () => {
  const cols = ['Column', 'Another']

  const tree = renderer
    .create(
      <Grid data={[]} order={{ by: 'desc' }} loading={false} loadMore={false} onOrder={false}>
        {cols.map((i, idx) => (
          <Column header={`${i} ${idx}`} orderBy='desc' basis='100px' />
        ))}
      </Grid>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
