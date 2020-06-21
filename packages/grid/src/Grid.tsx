import useComponentSize   from '@rehooks/component-size'
import React, { useRef }  from 'react'

import { Column, Layout } from '@atlantis-lab/layout'

import { Body }           from './body'
import { Header }         from './header'

export const Grid = ({
  children,
  data = [],
  rowHeight = 40,
  loading,
  loadMore,
  order,
  onOrder,
}) => {
  const ref = useRef(null)
  const { width } = useComponentSize(ref)

  return (
    <Column ref={ref}>
      <Layout>
        <Header columns={children} order={order} onOrder={onOrder} />
      </Layout>
      <Layout height='100%' flexGrow={1}>
        {width && (
          <Body
            data={data}
            columns={children}
            rowHeight={rowHeight}
            rowWidth={width}
            loading={loading}
            loadMore={loadMore}
          />
        )}
      </Layout>
    </Column>
  )
}
