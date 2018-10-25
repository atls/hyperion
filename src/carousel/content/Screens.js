import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import Swipeable from 'react-swipeable'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    visibility: 'hidden',
  },
  ready: {
    visibility: 'visible',
  },
  transition: {
    transition: '0.3s',
  },
})

class Screens extends Component {
  constructor (props) {
    super()
    this.state = {
      left: props.left,
      transition: true,
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ left: nextProps.left })
  }

  swiping = (absX) => {
    this.setState({ left: (absX * 1.5) + this.props.left })
    this.setState({ transition: false })
  }

  swiped = (deltaX) => {
    const { elemWidth, active, left, children } = this.props
    const maxDelta = elemWidth / 40

    if (deltaX > 0 && maxDelta < deltaX) {
      if (children.length - 1 !== active) {
        this.props.onChange(active + 1)
        this.setState({ left: -(active + 1) * elemWidth })
      } else {
        this.setState({ left })
      }
    } else if (deltaX < 0 && -maxDelta > deltaX) {
      if (active !== 0) {
        this.props.onChange(active - 1)
        this.setState({ left: -(active - 1) * elemWidth })
      } else {
        this.setState({ left })
      }
    } else {
      this.setState({ left })
    }
    this.setState({ transition: true })
  }

  render () {
    const { width, height, ready, children } = this.props
    const { left, transition } = this.state

    return (
      <Swipeable
        onSwipingLeft={(e, absX) => this.swiping(-absX)}
        onSwipingRight={(e, absX) => this.swiping(absX)}
        onSwiped={(e, deltaX) => this.swiped(deltaX)}
        className={styles({ ready, transition })}
        style={{ height, width, left }}
      >
        {children}
      </Swipeable>
    )
  }
}

export default Screens
