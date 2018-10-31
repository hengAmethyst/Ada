import * as types from './mutation-types'

const mutations = {
    // [方法名](参数1,参数2...){方法}
    [types.SET_OPEN_ID](state, v) {
        state.openId = v
    },
    [types.SET_LOCATION](state, v) {
        state.locationInfo = v
    },
    [types.dishInfo](state, v) {
        state.dishInfo = v
    },
}

export default mutations;