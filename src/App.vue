<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
    <div class="p-4">
      <h1 class="text-2xl font-bold text-blue-600">Hello Tailwind with Vue 2</h1>
      <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Klik Saya</button>
    </div>
  </div>
</template>
<script>

export default {
  name: "App",
  computed: {
  }
};
</script>


<style scoped lang="css">
</style>
