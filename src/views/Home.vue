<script setup lang="ts">
import ChatBox from '@/components/ChatBox.vue';
import Snowf from 'vue-snowf';
</script>

<template>
  <section class="flex justify-center mt-6">
    <div class="md:w-[35vw] mb-2">
      <Snowf
        :amount="50"
        :size="5"
        :speed="1.5"
        :wind="0"
        :opacity="0.8"
        :swing="1"
        :image="null"
        :zIndex="null"
        :resize="true"
        color="#fff"
      />
      <ChatBox />
    </div>
  </section>
</template>