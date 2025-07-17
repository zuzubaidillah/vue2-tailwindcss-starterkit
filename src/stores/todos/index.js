const state = {
	data: {
		filterName: '',
		listTodos: [
			{
				id: 1,
				name: 'Satu'
			},
			{
				id: 2,
				name: 'Dua'
			},
		]
	}
}
const mutations = {
	setTodos(state, payload) {
		state.data.listTodos = payload
	}
}
const actions = {}
const getters = {
	getTodosWithFilter: (state) => {
		if (state.data.filterName) {
			const nameLowecase = state.data.filterName.toLowerCase();
			return state.data.listTodos
				.filter(item => item.name.toLowerCase().includes(nameLowecase));
		}
		return state.data.listTodos
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
