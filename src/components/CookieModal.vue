<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { CookieIcon } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')
function goToCookie() {
  window.location.href = 'https://buy.stripe.com/bIY8zY63oe691P2aEE'
}

</script>

<template>
  <Button @click="goToCookie" variant="ghost">
    <CookieIcon />
  </Button>
</template>