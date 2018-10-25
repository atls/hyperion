import React, { Component, cloneElement, Children } from 'react'
import { StyleSheet } from 'elementum'
import { contentSize } from './utils'
import Screens from './Screens'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    position: 'relative',
    minHeight: '100%',
    display: 'flex',
  },
})

class Content extends Component {
  state = {
    width: null,
    height: null,
    ready: false,
  }

  onRender = (el) => {
    if (el) {
      this.setState(contentSize(el), () => {
        this.setState({ ready: true })
      })
    }
  }

  getChildren () {
    const { width, height } = this.state

    if (!(width && height)) {
      return []
    }

    return Children.toArray(this.props.children).map(child => cloneElement(child, { width, height }))
  }

  render () {
    const { active, onChange } = this.props
    const { width, height, ready } = this.state
    const children = this.getChildren()

    const offset = (width * active * -1)
    const fullWidth = width * children.length

    return (
      <div
        ref={this.onRender}
        className={styles()}
        style={{ width }}
      >
        <Screens
          active={active}
          onChange={onChange}
          elemWidth={width}
          width={fullWidth}
          height={height}
          left={offset}
          ready={ready}
        >
          {children}
        </Screens>
      </div>
    )
  }
}

export default Content
