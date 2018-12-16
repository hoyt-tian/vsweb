import React from 'react'
import '../../common'
import './app.less'
import Splitter from './splitter'
import LeftPanel from './leftpanel'

export default class App extends React.PureComponent {

  constructor(props, context, updater) {
    super(props, context, updater)
    this.state = {
      explorerSize: 470,
      showExplorer: true,
    }
  }



  render() {
    return <section className="vscode">
      <section className="vscode-main">
        <LeftPanel />
        <Splitter />
        <section>right</section>
      </section>
      <footer></footer>
    </section>
  }
}
