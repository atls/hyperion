import React, { useEffect, useMemo, useState }            from 'react'
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview/web'

import { Actions }                                        from './Actions'
import { Row }                                            from './Row'

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
          /* eslint-disable */
          dim.width = rowWidth
          dim.height = rowHeight
          /* eslint-enable */
        }
      ),
    [rowWidth, rowHeight]
  )

  const renderFooter = useMemo(() => () => <Actions loading={loading} loadMore={loadMore} />, [
    loading,
    loadMore,
  ])

  const rowRenderer = (type, rowData, index) => (
    <Row data={rowData} index={index} columns={columns} />
  )

  if (data && data.length === 0 && !loading && !loadMore) {
    return null
  }

  return (
    <RecyclerListView
      layoutProvider={layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={rowRenderer}
      renderFooter={renderFooter}
    />
  )
}
