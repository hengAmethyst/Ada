import * as types from './mutation-types'

export default {
    // 展示蒙版
    [types.showMask] (state,param){
        state.showMask = param
    },
    // 获取userToken
    [types.userToken] (state,param){
        state.userToken = param
    }
}
  
  