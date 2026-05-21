<template>

  <div class="layout">

    <!-- Header -->
    <Header v-if="$route.path !== '/'" />

    <!-- Pages -->
    <main class="main-content p-0 m-0">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer v-if="$route.path !=='/'" />

  </div>

</template>

<script setup>

import Header from './components/Header/index.vue'
import Footer from './components/footer/index.vue'
</script>

<style scoped>

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
}

</style>