import React, { Component } from 'react'
import { Column, Layout } from 'flex-layouts'
import Content from './content/Content'
import Dots from './dots/Dots'

class Carousel extends Component {
  state = {
    active: 0,
  }

  onChange = (active) => {
    this.setState({ active })
  }


  render () {
    const { children } = this.props
    const { active } = this.state

    return (
      <Column>
        <Layout grow={1}>
          <Content
            active={active}
            onChange={this.onChange}
          >
            {children}
          </Content>
        </Layout>
        <Layout>
          <Dots
            active={active}
            onChange={this.onChange}
          >
            {children}
          </Dots>
        </Layout>
      </Column>
    )
  }
}

export default Carousel
