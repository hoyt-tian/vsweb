import React from 'react'
import Toast from 'antd-mobile/lib/toast'
import 'antd-mobile/lib/toast/style/index.less'
import '../../common'
import './app.less'

export default class App extends React.PureComponent {
  componentDidMount() {
    Toast.info('挂载成功')
  }
  render() {
    return <section>Hello World</section>
  }
}