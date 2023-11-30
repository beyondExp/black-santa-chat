<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')
function toggleDarkMode() {
  const root = document.querySelector(':root')
  const logo = document.querySelector('.logo-santa')

  root?.classList.toggle('dark')
  isDarkMode.value = !isDarkMode.value


  localStorage.setItem('darkMode', String(isDarkMode.value))

  // change logo src based on the dark mode state
  if (isDarkMode.value) {
    // If dark mode is activated
    logo?.setAttribute('src', '/bbot-meets.png')
    console.log('/bbot-meets.png')
    console.log(logo)
  } else {
    // If dark mode is deactivated
    console.log('/bbot-meets-dark.png')

    logo?.setAttribute('src', '/bbot-meets-dark.png')
    console.log(logo)

  }
}

onMounted(() => {
  if (isDarkMode.value) {
    const root = document.querySelector(':root')
    const logo = document.querySelector('.logo-santa')
    logo?.setAttribute('src', '/bbot-meets.png')
    root?.classList.add('dark')
  }
})

onUnmounted(() => {
  const root = document.querySelector(':root')
  root?.classList.remove('dark')
})
</script>

<template>
  <Button @click="toggleDarkMode" variant="ghost">
    <div v-if="isDarkMode" >
      <Moon class="h-5 w-5" />
    </div>
    <div v-else>
      <Sun class="h-5 w-5" />
    </div>
  </Button>
</template>