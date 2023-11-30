<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')
const logo = document.querySelector('.logo-santa')
function toggleDarkMode() {
  const root = document.querySelector(':root')


  root?.classList.toggle('dark')
  isDarkMode.value = !isDarkMode.value
  // change logo src on toggle
  if (isDarkMode.value) {
    logo?.setAttribute('src', '/bbot-meets.png')
    console.log('dark mode')
  } else {
    console.log('dark logo')

    logo?.setAttribute('src', '/bbot-meets-dark.png')
  }

  localStorage.setItem('darkMode', String(isDarkMode.value))
}

onMounted(() => {
  if (isDarkMode.value) {
    const root = document.querySelector(':root')
    root?.classList.add('dark')
    console.log('dark mode')

    logo?.setAttribute('src', '/bbot-meets.png')
  }
})

onUnmounted(() => {
  const root = document.querySelector(':root')
  root?.classList.remove('dark')
  console.log('dark logo')

  logo?.setAttribute('src', '/bbot-meets-dark.png')
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