import React from 'react'
import { connect } from 'react-redux'
import { ActionMap } from '../../service/redux/action'
import './leftpanel.less'

class Explorer extends React.PureComponent {
  render() {
    const { width = 0 } = this.props
    return <section className="explorer" style={{ width: `${width}px` }}>
    </section>
  }
}

export default Explorer