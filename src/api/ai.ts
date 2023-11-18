import axios from "axios";

export async function sendPrompt(message: string) {
  try {
    const response = await axios.post(
      "/api/expert/askInternAgent",
      {
        "expertId": 1,
        "promptId": null,
        "model": "gpt-4",
        "message": message
      },
      {
        headers: {
          Authorization: `Bearer jzDv9XslOaUq6-h8lXgKmVFF9lyWyUGP`,
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