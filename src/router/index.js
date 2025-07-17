import Vue from 'vue'
import VueRouter from 'vue-router'
import todoList from './todoList'
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView
	},
	...todoList
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
