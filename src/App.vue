<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="flex">
    <SideBar />
  </div>
  <div class="flex">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
