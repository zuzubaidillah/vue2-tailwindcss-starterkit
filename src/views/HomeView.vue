<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      rootStore: state => state
    }),
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    ...mapMutations(["setUser"]),
    ...mapActions(["login"])
  }
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-blue-600">Hello Tailwind with Vue 2</h1>
    <h1 class="text-2xl font-bold text-blue-600">HOME {{isAuthenticated}}</h1>
    <router-link :to="{ name: 'TodosDetail', params: { id: 'alwi' } }">
      <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Klik Saya</button>
    </router-link>
  </div>
</template>

<style scoped lang="css">

</style>
