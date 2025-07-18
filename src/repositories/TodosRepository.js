import ApiService from "@/api/ApiService";

class TodosRepository {

	constructor() {
		this.apiService = ApiService;
	}

	async getTodos() {
		return await this.apiService.get("/todos");
	}
}

export default new TodosRepository
