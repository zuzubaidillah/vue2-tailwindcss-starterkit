import TodosRepository from "@/repositories/TodosRepository";

class TodosService {
	constructor() {
		this.repository = TodosRepository;
	}

	async todosGet() {
		try {
			return await this.repository.getTodos();
		} catch (error) {
			console.log('service error', error);
			throw error;
		}
	}
}

export default TodosService
