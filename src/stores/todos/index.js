import axios from "axios";

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
