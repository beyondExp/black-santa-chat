<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { onAuthStateChanged, type User } from 'firebase/auth';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { auth } from '@/lib/firebase';
import { AvatarImage } from 'radix-vue'

const toast = useToast();
const emit = defineEmits(['send-prompt']);

const user = ref<User | null>(null);

onAuthStateChanged(auth, (userState) => {
  user.value = userState;
});

const examplePrompts = JSON.parse(import.meta.env.VITE_EXAMPLE_PROMPTS || '[]');


function handlePromptClick(prompt: string) {
  emit('send-prompt', prompt);
  /*
  if (user.value) {
    emit('send-prompt', prompt);
  } else {
    toast.error('Please sign in to send a message.');
  }
   */
}

const avatarImageUrl = import.meta.env.VITE_AVATAR_IMAGE_URL;
const cardTitle = import.meta.env.VITE_CARD_TITLE;
const cardDescription = import.meta.env.VITE_CARD_DESCRIPTION
</script>

<template>
  <Card>
    <CardHeader style='text-align: center'>
      <AvatarImage
        :src="avatarImageUrl"
        alt="Santa"
        size="55"
        style="width: 55px; height: 55px; border-radius: 50%; margin: auto;"
      />
      <CardTitle>{{ cardTitle }}</CardTitle>
      <CardDescription>{{ cardDescription }}</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col gap-4 my-3">
      <Button 
        v-for="(prompt, index) in examplePrompts" 
        :key="index" 
        variant="outline"
        style='height:auto;'
        @click="handlePromptClick(prompt)"
      >
        {{ prompt }}
      </Button>
    </CardContent>
  </Card>
</template>