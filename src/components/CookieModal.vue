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

      <div class="card" @click="() => goToProduct('https://buy.stripe.com/aEUeYm8bwgehfFS8wz', '1 Keks')">
        <AvatarImage class='card-image' src="/keks.png" alt="Santa" />
        <div class="card-text">
          <p>1 Keks</p>
          <p>Preis: $1</p>
        </div>
      </div>

      <div class="card" @click="() => goToProduct('https://buy.stripe.com/5kAeYmgI2gehaly146', '2 Kekse')">
        <AvatarImage class='card-image' src="/kekse.png" alt="Santa" />
        <div class="card-text">
          <p>2 Kekse</p>
          <p>Preis: $2</p>
        </div>
      </div>

      <div class="card" @click="() => goToProduct('https://buy.stripe.com/4gwdUibnI5zD79mdQR', '1 Keks und eine Milch')">
        <AvatarImage class='card-image' src="/kekse.png" alt="Santa" />
        <div class="card-text">
          <p>1 Keks und eine Milch</p>
          <p>Preis: $5</p>
        </div>
      </div>

      <div class="card" @click="() => goToProduct('https://buy.stripe.com/bIY8zY63oe691P2aEE', 'Alles!')">
        <AvatarImage class='card-image' src="/kekse.png" alt="Santa" />
        <div class="card-text">
          <p>Alles!</p>
          <p>Preis: $8</p>
        </div>
      </div>

      <!-- Other cards -->

      <Button variant="secondary" @click="toggleModal">Close</Button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  padding: 5px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin-left: 0px !important;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
}

.product{
  width: 100% !important;
}

.modal-content {
  background: var(--background);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  max-height: 80vh; /* 80% of the viewport height */
  overflow-y: auto; /* Enables vertical scrolling */
}

.card {
  background: var(--foreground);
  border: 1px solid var(--card);
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
