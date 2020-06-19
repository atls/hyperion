import React, { useEffect, useMemo, useState } from 'react'
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview/web'

import { Actions }                             from './Actions'
import { Row }                                 from './Row'

export const Body = ({ columns = [], data = [], rowHeight, rowWidth, loading, loadMore }: any) => {
  const [dataProvider, setDataProvider] = useState(() =>
    new DataProvider((r1, r2) => !Object.is(r1, r2)).cloneWithRows(data)
  )

  useEffect(() => {
    setDataProvider(dataProvider.cloneWithRows(data))
  }, [data])

  const layoutProvider = useMemo(
    () =>
      new LayoutProvider(
        index => index,
        (type, dim) => {
          dim.width = rowWidth
          dim.height = rowHeight
        }
      ),
    [rowWidth, rowHeight]
  )

  const renderFooter = useMemo(() => () => <Actions loading={loading} loadMore={loadMore} />, [
    loading,
    loadMore,
  ])

  const rowRenderer = (type, data, index) => <Row data={data} index={index} columns={columns} />

  return (
    <RecyclerListView
      layoutProvider={layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={rowRenderer}
      renderFooter={renderFooter}
    />
  )
}
