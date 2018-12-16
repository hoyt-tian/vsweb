import React from 'react'
import { connect } from 'react-redux'
import { getFileName } from 'UTIL'
import './leftpanel.less'



class FileExplorer extends React.PureComponent {


  renderFileItem(file) {
    const { path } = file
    const name = getFileName(path)
    if (file.folder) {
      return <div key={path}><label>▶</label>{name}</div>
    } else {
      return <div key={path}>{name}</div>
    }
  }

  renderFiles() {
    const { files = [] } = this.props

    return <section className="file-explorer">
      <header>资源管理器</header>
      <section>
        {files.map(f => this.renderFileItem(f))}
      </section>
    </section>
  }

  render() {
    const { activitybar } = this.props
    const item = activitybar.find(i => i.active)
    const height = item.name === '资源管理' ? '100%' : 0
    return <section style={{ height }}>
      {this.renderFiles()}
    </section>
  }
}

const mapState2Props = (state) => {
  const {  files, activitybar } = state
  return {
    files,
    activitybar
  }
}

export default connect(mapState2Props)(FileExplorer)
