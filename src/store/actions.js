import * as types from './mutation-types'
// 进行涉及到多个全局变量的复杂计算

const setOpenId = ({ commit }, { id }) => {
	console.log(openId)
    commit(openId, id)
}
const setLocation = ({ commit }, { v }) => {
    commit(locationInfo, v)
}
export default {
    setOpenId: setOpenId,
    setLocation: setLocation
}