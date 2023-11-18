import axios from "axios";

export async function sendPrompt(message: string) {
  try {
    // Retrieve the data attribute from sessionStorage
    const conversationId = sessionStorage.getItem('conversationId');

    // Prepare the payload for the POST request
    const payload = {
      "expertId": 5,
      "promptId": null,
      "conversationId": conversationId ? conversationId : null,
      "model": "ft:gpt-3.5-turbo-1106:beyond-group-gmbh::8MNri9iJ",
      "message": message,
      "additionalMessages": [{"role": "system", "message": "Hello, I'm Black Santa. I'm here to help you with your Christmas shopping. What can I do for you?"}"}],
    };

    const response = await axios.post(
      "/api/expert/askBlackSanta",
      payload,
      {
        headers: {
          Authorization: `Bearer jzDv9XslOaUq6-h8lXgKmVFF9lyWyUGP`,
        }
      }
    );

    // Save the data attribute to sessionStorage if it's not null
    if (response.data.conversationId) {
      sessionStorage.setItem('conversationId', response.data.conversationId);
    }

    return response.data.result;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      return "I'm sorry, but I cannot answer that.";
    }
  }
}