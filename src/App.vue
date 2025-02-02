<script setup>
import TheHeader from './components/TheHeader.vue';
import Footer from './components/Footer.vue';
import { useRouter } from 'vue-router';

</script>

<template>
  <TheHeader />
  <main :class="$route.name">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style scoped>

</style>
