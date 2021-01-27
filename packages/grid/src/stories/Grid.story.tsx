import React            from 'react'

import { Column, Grid } from '../index'

export const ExampleGrid = ({
  cols = ['Column', 'Another'],
  colsBasis = '150px',
  colsOrderBy = 'desc',
  order = { by: 'desc' },
  rowHeight = 40,
  data = [],
  loading,
  loadMore,
  onOrder,
}) => (
  <Grid data={data} order={order} loading={loading} loadMore={loadMore} onOrder={onOrder}>
    {cols.map((i, idx) => (
      <Column header={`${i} ${idx}`} orderBy={colsOrderBy} basis={colsBasis} />
    ))}
  </Grid>
)

export default {
  title: 'Grid',
  component: ExampleGrid,
}
