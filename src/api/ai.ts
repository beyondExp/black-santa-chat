import axios from "axios";
import MarkdownIt from "markdown-it";

export async function sendPrompt(message: string) {
  try {
    // Retrieve the data attribute from sessionStorage
    const conversationId = sessionStorage.getItem('conversationId');
    const markdown = new MarkdownIt();

    // Prepare the payload for the POST request
    const payload = {
      "expertId": 5,
      "promptId": null,
      "conversationId": conversationId ? conversationId : null,
      "model": "ft:gpt-3.5-turbo-1106:beyond-group-gmbh::8R6qKpxG",
      "message": message,
    };

    const response = await axios.post(
      "/api/expert/askBlackSanta",
      payload,
      {
        headers: {
          Authorization: `Bearer 3ZIB__S3hyi4VQjISGCL-6kxv5R-bphV`,
        }
      }
    );

    // Save the data attribute to sessionStorage if it's not null
    if (response.data.conversationId) {
      sessionStorage.setItem('conversationId', response.data.conversationId);
    }

    return markdown.render(response.data.result);

  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      return "I'm sorry, but I cannot answer that.";
    }
  }
}