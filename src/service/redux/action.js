import { clone } from '../../util'

const ActionMap = {
  /**
   * 左侧栏目内容
   */
  activitybar: [
    {name: '资源管理', icon: 'https://gw.alipayobjects.com/zos/rmsportal/soHYMNOrwgKEuUbGRJvc.svg', active: true},
    {name: '搜索', icon: 'https://gw.alipayobjects.com/zos/rmsportal/tzRTMiZsYJitzDcGJOPv.svg'}
  ],
  /**
   * 左侧栏目是否展开
   */
  activitybarExpand: true,
  /**
   * 左侧栏目当前尺寸
   */
  leftPanelSize: 200,

  files: [
    { path: './mock', folder: true, children: [] },
    { path: './src', folder: true, children: [] },
    { path: './.babelrc', folder: false},
    { path: './package.json', folder: false}
  ],
}

const createAction = (type) => {
  return (data) => {
    return {
      type,
      payload: data,
    }
  }
}

const initialState = clone(ActionMap)

Object.keys(initialState).forEach(k => ActionMap[k] = createAction(k))


export {
  createAction,
  ActionMap,
  initialState,
}
