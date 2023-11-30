<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { CookieIcon } from 'lucide-vue-next'
import { AvatarImage } from 'radix-vue'

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value;
}

const goToProduct = (url, productName) => {
  // You can use productName if needed for analytics or other purposes
  window.location.href = url;
}
</script>

<template>
  <Button @click="toggleModal" variant="ghost">
    <CookieIcon />
  </Button>

  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h1>Hinterlasse dem Santa einen Keks</h1>
      <p>Wähle aus, wie viele Kekse du dem Santa geben möchtest.</p>

      <div class="card" @click="() => goToProduct('https://buy.stripe.com/link1', '1 Keks')">
        <AvatarImage class='card-image' src="/keks.png" alt="Santa" />
        <div class="card-text">
          <p>1 Keks</p>
          <p>Preis: $5</p>
        </div>
      </div>

      <div class="card" @click="() => goToProduct('https://buy.stripe.com/link2', '2 Kekse')">
        <AvatarImage class='card-image' src="/kekse.png" alt="Santa" />
        <div class="card-text">
          <p>2 Kekse</p>
          <p>Preis: $10</p>
        </div>
      </div>

      <!-- Other cards -->

      <Button variant="secondary" @click="toggleModal">Close</Button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  overflow: scroll;
  padding: 5px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin-left: 0px !important;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.product{
  width: 100% !important;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.card {
  background: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: center;
}

.card:hover {
  background-color: #e9e9e9;
}

.card-image {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: block;
}

.card-text p {
  margin: 5px 0;
}
</style>
