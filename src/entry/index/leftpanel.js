import React from 'react'
import { connect } from 'react-redux'
import { ActionMap } from '../../service/redux/action'
import Explorer from './explorer'
import './leftpanel.less'

class LeftPanel extends React.PureComponent {


  renderIcons() {
    const { items = [], dispatch, expand } = this.props
    return <section className="icons">
      {items.map((item) => {
        return <div className={`item ${item.active ? 'active' : ''}`} key={item.name}>
        <img src={item.icon}
        onClick={() => {
          const current = items.find(i => i.active)
          dispatch(ActionMap.activitybar(items.map(i => {
            i.active = i === item
            return i
          })))
          if (current === item) {
            dispatch(ActionMap.activitybarExpand(!expand))
          }
        }}/></div>
      })}
    </section>
  }

  render() {
    const { width, expand } = this.props
    return <section className="leftpanel">
      {this.renderIcons()}
      <Explorer width={expand ? width : 0} />
    </section>
  }
}


const mapState2Props = (state) => {
  const {  leftPanelSize, activitybarExpand, activitybar } = state
  return {
    items: activitybar,
    width: leftPanelSize,
    expand: activitybarExpand,
  }
}

export default connect(mapState2Props)(LeftPanel)