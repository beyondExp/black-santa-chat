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

const examplePrompts = [
  'Ich brauche eine Geschenkidee für eine Freundin',
  'Kannst du mir ein Gedicht schreiben über die Socke am Kamin?',
  'Welches Geschenk passt zu einem 10-jährigen Jungen?',
  'Ich brauche ein Geschenk für meine Mutter',
  'Ich brauche ein Geschenk für meinen Vater',
  'Kannst du mir ein Rezept für einen Weihnachtskuchen geben?',
]

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
</script>

<template>
  <Card>
    <CardHeader>
      <AvatarImage
        src="https://files.oaiusercontent.com/file-fSpulO0YeTxejOK3DtMFd3ex?se=2123-10-18T03%3A43%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D16d37a55-484b-45be-ba38-77bd07280e9f.png&sig=P/afddIw/5Sce667fr4jzEZhJZZkPT7kZWo4tr7JxZ4%3D"
        alt="Black Santa"
        size="55"
        style="width: 55px; height: 55px; border-radius: 50%; margin: auto;"
      />
      <CardTitle>Hallo ich bin Black Santa!</CardTitle>
      <CardDescription>Beginne ein Gespräch mit mir, indem du mir eine Nachricht schickst oder auf die Beispielanweisungen klickst.</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col gap-4 my-3">
      <Button 
        v-for="(prompt, index) in examplePrompts" 
        :key="index" 
        variant="outline"
        @click="handlePromptClick(prompt)"
      >
        {{ prompt }}
      </Button>
    </CardContent>
  </Card>
</template>