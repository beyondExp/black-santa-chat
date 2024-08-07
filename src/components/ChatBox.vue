<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { sendPrompt } from '@/api/ai'
import Message from './Message.vue'
import Input from './Input.vue'
import WelcomeMessage from './WelcomeMessage.vue'
import { auth, db } from '@/lib/firebase';
import { type User, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import ChatHistory from './ChatHistory.vue';

export interface Message {
  text: string
  sender: 'user' | 'ai'
}

const messages = ref<Message[]>([])
const user = ref<User | null>(null);
const chatId = ref<string | null>(null);
const aiThinking = ref(false);

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, (userState) => {
    user.value = userState;

    if (!user.value) {
      messages.value = [];
      chatId.value = null;
    }
  });

  return unsubscribe;
});

async function handleSend(text: string) {
  messages.value.push({ text, sender: 'user' })

  aiThinking.value = true;
  const aiMessage = await sendPrompt(text) 
  aiThinking.value = false;
  
  messages.value.push({ text: aiMessage, sender: 'ai' })

  if (user.value) {
    if (!chatId.value) {
      chatId.value = `${user.value.uid}_${Date.now()}`;
    }
    const chatRef = doc(db, 'chats', chatId.value);

    try {
      const existingChat = await getDoc(chatRef);
      const title = messages.value[0]?.text || '';

      if (!existingChat.exists()) {
        await setDoc(chatRef, {
          userId: user.value.uid,
          chatId: chatId.value,
          messages: messages.value,
          title,
        });
      } else {
        await updateDoc(chatRef, {
          messages: messages.value,
          title,
        });
      }
    } catch (error) {
      console.error('Error saving chat:', error);
    }
  }
}

const onChatSelected = (selectedChat: { messages: Message[], id: string }) => {
  messages.value = selectedChat.messages;
  chatId.value = selectedChat.id;
};

function handleClearChat() {
  messages.value = [];
};


//function formatMessage(message: string) {
//  let formattedMessage = message
//    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//    .replace(/\n/g, '<br />');

//  return formattedMessage;
//}
</script>

<template>
  <div class="flex flex-col gap-4 mx-4 mb-32">
    <WelcomeMessage @send-prompt="handleSend" v-if="messages.length === 0" />
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="[
        'p-2 rounded-md',
        message.sender === 'user' ? 'bg-primary text-white dark:text-black' : 'bg-secondary',
        message.sender === 'user' ? 'self-end' : 'self-start chat-message'
      ]"
    >
      <div v-html="message.text"></div>
    </div>
    <div v-if="aiThinking" class="self-start p-2 rounded-md bg-secondary">
      <span class="animate-ping">.</span>
      <span class="animate-ping delay-150">.</span>
      <span class="animate-ping delay-300">.</span>

    </div>

    <ChatHistory @chat-selected="onChatSelected" />
    <!-- Werbung nach Chat -->
    <amp-ad width="100vw" height="320"
            type="adsense"
            data-ad-client="ca-pub-4053881617635255"
            data-ad-slot="8606039324"
            data-auto-format="mcrspv"
            data-full-width="">
      <div overflow=""></div>
    </amp-ad>
    <Input @send="handleSend" @clear-chat="handleClearChat" />
  </div>
</template>
<style scoped>
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
.chat-message >>> a:hover{
  background: #bf2233;
  box-shadow: 1px 0px 2px 1px #0000004f;
}
.chat-message >>> a:after{
  width: 35px;
  display: inline-block;
  content: "🎁";
}
.chat-message >>> a:hover:after{
  width: 35px;
  display: inline-block;
  content: "🎉";
  transition: all 0.5s;
}

</style>