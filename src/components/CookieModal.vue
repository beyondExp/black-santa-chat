<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { CookieIcon } from 'lucide-vue-next'
import { AvatarImage } from 'radix-vue'

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
      <Button class="product" variant="primary" @click="() => goToProduct('https://buy.stripe.com/link1')">
        <AvatarImage
          class='logo-santa'
          src="/keks.png"
          alt="Santa"
          size="55"
          style="width: auto; height: 55px; margin: auto;"
        />
        1 Keks
      </Button>
      <Button class="product" variant="primary" @click="() => goToProduct('https://buy.stripe.com/link2')">
        <AvatarImage
          class='logo-santa'
          src="/kekse.png"
          alt="Santa"
          size="55"
          style="width: auto; height: 55px; margin: auto;"
        />
        2 Kekse
      </Button>
      <Button class="product" variant="primary" @click="() => goToProduct('https://buy.stripe.com/link3')">
        <AvatarImage
          class='logo-santa'
          src="/keks_mit_milch.png"
          alt="Santa"
          size="55"
          style="width: auto; height: 55px; margin: auto;"
        />
        Keks mit Milch
      </Button>
      <Button class="product" variant="primary" @click="() => goToProduct('https://buy.stripe.com/link4')">
        Alles!
      </Button>

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
</style>