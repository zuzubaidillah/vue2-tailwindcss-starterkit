import TodosRepository from "@/repositories/TodosRepository";

class TodosService {
	constructor() {
		this.repository = TodosRepository;
	}

	async todosGet(payload) {
		const {q, limit, page} = payload

		try {
			// validasi hanya key sesuai query params
			const params = {
				q: q ? q : undefined, // payload.filterQ
				limit: limit ?? undefined, // payload.limit
				page: page || undefined // payload.page
			}
			console.log('payload', payload)
			console.log('params', params)
			return await this.repository.getTodos(params);
		} catch (error) {
			console.log('service error', error);
			throw error;
		}
	}
}

export default TodosService
