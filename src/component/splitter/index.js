import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

const img = new Image()
img.src = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='


class Splitter extends React.PureComponent {
  constructor(props, context, updater) {
    super(props, context, updater)
    this.dragging = false
    this.lastMouse = null
  }

  dragStart = (event) => {
    event.nativeEvent.dataTransfer.setDragImage(img, 0, 0)
    this.dragging = true
    this.lastMouse = null
  }

  dragEnd = () => {
    if (this.dragging) this.dragging = false
  }

  drag = (event) => {
    if (this.dragging) {
      if (this.lastMouse !== null) {
        const offset = event.nativeEvent.screenX - this.lastMouse
        if (offset !== 0 && Math.abs(offset) < 20) {
          this.props.onChange.call(this, offset)
        }
        this.lastMouse = event.nativeEvent.screenX
      } else {
        this.lastMouse = event.nativeEvent.screenX
      }
    }
  }

  render() {
    return (<section className={`splitter ${this.props.draggable ? 'draggable' : 'in-draggable'}`}
      draggable="true"
      onDragStart={this.dragStart}
      onDrag={this.drag}
      onDragExit={this.dragEnd}></section>)
  }
}

Splitter.propTypes = {
  onChange: PropTypes.func,
  draggable: PropTypes.bool,
}

export default Splitter
