import {get} from './config'

export default {
  // 根目录接口
  init (path) {
    return get('btree/init', {path})
  },
  // 获取文件夹下文件
  getDirChildren (path) {
    return get('btree/getDirChildren', {path})
  },
  // 根据类型获取文件
  getByType (type) {
    return get('btree/getByType', {type})
  }
}
