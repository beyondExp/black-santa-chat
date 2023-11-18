import axios from "axios";

export async function sendPrompt(message: string) {
  try {
    const response = await axios.post(
      "https://b-bot-incubator.appengine.flow.ch/expert/askInternAgent",
      { prompt: message },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.BBOT_API_TOKEN}`,
        }
      }
    );
    return response.data.message;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      return "I'm sorry, but I cannot answer that.";
    }
  }
}