import {get} from './config'

export default {
  // 测试接口
  init (path) {
    return get('btree/list', {path})
  }
}
