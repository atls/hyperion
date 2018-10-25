import React, { Component } from 'react'
import { Column, Layout } from 'flex-layouts'

class Carousel extends Component {

  render() {
    const { children } = this.props

    return (
      <Column>
        <Layout grow={1}>
          {children}
        </Layout>
        <Layout>
          {children}
        </Layout>
      </Column>
    )
  }
}

export default Carousel
