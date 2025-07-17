import TodosView from "@/views/TodosView.vue";

export default [
	{
		path: '/todos',
		name: 'Todos',
		component: TodosView
	},
	{
		path: '/todos/:id',
		name: 'TodosDetail',
		component: TodosView
	}
]
