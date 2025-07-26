import TodosService from "@/services/TodosService";

const state = {
	data: {
		filterName: 'dua',
		limit: 10,
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

const actions = {
	async fetchTodos({ state }) {
		const params = {
			filterLimit: state.data.limit,
			pagee: 1,
			limitt: 0,
			filterQ: state.data.filterName,
		}

		try {
			const service = new TodosService()
			const result = await service.todosGet(params)
			console.log(result)
		}catch (error) {
			console.log('vuex.actions.fetchTodos', error)
		}
	}
}

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
