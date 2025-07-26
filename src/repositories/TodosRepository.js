import ApiService from "@/api/ApiService";

class TodosRepository {

	// fungsi yang akan dijalankan selalu ketika memanggil method
	constructor() {
		this.apiService = ApiService;
	}

	// ini method
	async getTodos(params) {
		return await this.apiService.get("/todos", { params });
	}
}

export default new TodosRepository
