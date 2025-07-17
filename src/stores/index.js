import Vue from 'vue'
import Vuex from 'vuex'
import Todos from './todos/index'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		todosStore: Todos,
	},
	state: {
		user: null,
		isLoading: false,
	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},
		setUserLoading(state, payload) {
			state.isLoading = payload
		}
	},
	actions: {
		login({ commit }, user) {
			commit('setUser', user)
		}
	},
	getters: {
		isAuthenticated: state => !!state.user
	}
})
