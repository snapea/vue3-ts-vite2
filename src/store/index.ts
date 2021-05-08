/*
 * @Author: wenzhenjin
 * @Date: 2021-04-08 11:16:28
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-22 11:49:59
 * @Description:
 */
import { createStore } from 'vuex'
// Create a new store instance.

interface State {
    navMenuCompleteShow: boolean
    historyNavList: { name: string; code: string }[]
}
const store = createStore<State>({
    state() {
        return {
            count: 0,
            navMenuCompleteShow: false,
            historyNavList: []
        }
    },
    mutations: {
        NAV_MENU_HOW(state) {
            state.navMenuCompleteShow = !state.navMenuCompleteShow
        },
        NAV_PUSH_ELE(state, payload: { name: string; code: string }) {
            console.log(payload.name)
            const hasHistory = state.historyNavList.find(item => item.name === payload.name);
            if (!hasHistory) {
                state.historyNavList.push(payload)
            }
        },
        NAV_DELETE_ELE(state, payload: {}){
        }
    },
    actions: {
        sendNavMenuBlock({ commit }) {
            commit('NAV_MENU_HOW')
        },
        sendNavEle({ commit }, payload) {
            commit('NAV_PUSH_ELE', payload)
        },
        sendDeleteNavEle({commit}, payload){
            commit('NAV_DELETE_ELE')
        }
    }
})

export default store
