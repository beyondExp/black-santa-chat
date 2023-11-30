<script setup lang="ts">
import ChatBox from '@/components/ChatBox.vue';

</script>

<template>
  <section class="flex justify-center mt-6">
    <div class="md:w-[35vw] mb-2" v-snow>
      <ChatBox />

    </div>
  </section>
</template>
<script>
import { VSnow } from 'vsnow';

export default {
  components: {
    VSnow
  }
};
</script>
