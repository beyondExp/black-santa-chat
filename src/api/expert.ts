import axios from "axios";
import { ref } from 'vue';

// Import the environment variable
const expertId = import.meta.env.VITE_EXPERT_ID;

// Reactive variable to store expert data
const expertData = ref(null);
const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchExpertData() {
  try {
    const response = await axios.get(`https://api.b-bot.space/api/v1/get_expert/${expertId}`, {
      headers: {
        "bbot-api-key": apiKey,
      }
    });
    expertData.value = response.data;
    return expertData.value;
  } catch (error: any) {
    console.error("Failed to fetch expert data:", error);
    throw error;
  }
}

export { expertData };
