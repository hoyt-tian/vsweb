import Splitter from '../../component/splitter'
import { connect } from 'react-redux'
import { ActionMap } from '../../service/redux/action'

const splitterChange = function(val) {
  const { draggable, leftPanelSize, leftPanelMinSize, leftPanelMaxSize, dispatch } = this.props
  if (draggable) {
    let nval = leftPanelSize + val
    nval = nval < leftPanelMinSize ? leftPanelMinSize : nval
    nval = nval > leftPanelMaxSize ? leftPanelMaxSize : nval
    dispatch(ActionMap.leftPanelSize(nval))
  }
}

const mapState2Props = (state) => {
  const { activitybarExpand, leftPanelSize } = state
  const PanelMinSize = 200

  return {
    draggable: activitybarExpand,
    leftPanelSize,
    leftPanelMinSize: PanelMinSize,
    leftPanelMaxSize: window.screen.width - PanelMinSize,
    onChange: splitterChange,
  }
}

export default connect(mapState2Props)(Splitter)
