import './hd'
import './index.less'

const host = 'http://localhost:8080'

/**
 * 生成请求url
 * @param {*} path 
 */
const Rpath = (path) => `${host}/${path}`

export {
  Rpath
}