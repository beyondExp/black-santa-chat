<script setup lang="ts">
import { onMounted } from 'vue';
import SiteHeader from './components/SiteHeader.vue';
import Home from './views/Home.vue';
import { fetchExpertData, expertData } from '@/api/expert';

// Fetch expert data when the component is mounted
onMounted(async () => {
  try {
    await fetchExpertData();
    console.log("Expert data fetched successfully:", expertData.value);
  } catch (error) {
    console.error("Error fetching expert data at session start:", error);
  }
});
</script>
<template>
  <SiteHeader />
  <main>
    <Home />
  </main>
</template>