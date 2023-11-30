<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { CookieIcon } from 'lucide-vue-next'

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value;
}

const goToProduct = (url) => {
  window.location.href = url;
}
</script>

<template>
  <Button @click="toggleModal" variant="ghost">
    <CookieIcon />
  </Button>

  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <Button variant="primary" @click="() => goToProduct('https://buy.stripe.com/link1')">Product 1</Button>
      <Button variant="primary" @click="() => goToProduct('https://buy.stripe.com/link2')">Product 2</Button>
      <Button variant="primary" @click="() => goToProduct('https://buy.stripe.com/link3')">Product 3</Button>
      <Button variant="secondary" @click="toggleModal">Close</Button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>