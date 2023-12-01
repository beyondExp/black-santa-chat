<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  message: String,
})
</script>

<template>
  <div class="flex flex-col gap-2 mt-4 md:w-[35vw] chat-message">
    <p class="leading-7">
      {{ message }}
    </p>
  </div>
</template>
<style>
.chat-message >>> a{
  background: #b11e31;
  color: inherit;
  text-decoration: inherit;
  padding: 5px;
  margin-top: 7px;
  margin-bottom: 7px;
  width: 100% !important;
  display: block;
  text-align: center;
  border-radius: 5px;
}
</style>