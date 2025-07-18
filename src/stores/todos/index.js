import axios from "axios";
import TodosService from "@/services/TodosService";

const state = {
	data: {
		filterName: "",
		listTodos: []
	}
}

const mutations = {
	setTodos(state, payload) {
		state.data.listTodos = payload
	}
}

const actions = {
	async fetchTodos({commit}) {
		try {
			const service = new TodosService()
			const result = await service.todosGet()
			console.log('sukses', result.data.data)
			commit('setTodos', result.data.data)
		}catch(error) {
			console.log('fetchTodos', error)
		}
	},

	async fetchTodosOld({commit}) {
		const result = await axios.get("http://localhost:3000/api/todos")
			.then((res) => res.data)
			.catch((err) => {
				console.log("area catch", err)

				return err.response.data;
			})

		console.log("result", result)
		if (result.data) {
			commit("setTodos", result.data)
		} else {
			console.log("error request API todo")
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
