import React from 'react'
import FileExplorer from './fileExplorer'
import './explorer.less'

class Explorer extends React.PureComponent {
  render() {
    const { width = 0 } = this.props
    return <section className="explorer" style={{ width: `${width}px` }}>
      <FileExplorer />
    </section>
  }
}

export default Explorer