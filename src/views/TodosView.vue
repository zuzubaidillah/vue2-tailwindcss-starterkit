<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "TodosView",
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      todosStore: state => state.todosStore.data,
    }),
    ...mapGetters("todosStore", [
      "getTodosWithFilter"
    ])
  },
  methods: {
    onSearch() {
      this.$store.dispatch("todosStore/fetchTodos");
    }
  },
  mounted() {
    this.$store.dispatch("todosStore/fetchTodos");
  }
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-blue-600">Hello Tailwind with Vue 2</h1>
    <h1 class="text-2xl font-bold text-blue-600">TODOS {{$route.params.id}}</h1>
    <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Klik Saya</button>

    <br>
    <input
      class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      v-model="todosStore.filterName"
    >
    <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" @click="onSearch">Cari di server</button>
    <br>

    getTodosWithFilter
    <pre>{{getTodosWithFilter}}</pre>

    todosStore.listTodos
    <pre>{{todosStore.listTodos}}</pre>
  </div>
</template>

<style scoped lang="css">

</style>
