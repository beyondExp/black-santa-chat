import axios from "axios";
import MarkdownIt from "markdown-it";

export async function sendPrompt(message: string) {
  try {
    // Retrieve the data attribute from sessionStorage
    const conversationId = sessionStorage.getItem('conversationId');
    const markdown = new MarkdownIt();

    // Prepare the payload for the POST request
    const payload = {
      "expert_id": 37,
      "ability_id": 80,
      "model_id": 6 ,
      "session_id": 6 ,
      "user_id": 123,
      "input_data": message,
      "document_urls": [],
      "tool_config": {
        "tavily_max_results": 1
      },
      "tool_activation": {
        "tavily_search": true,
        "wolfram_alpha": true,
        "document_retriever": false,
        "notion_connector": false
      }
    };

    const response = await axios.post(
      "/api/v1/invoke_agent",
      payload,
      {
        headers: {
          "bbot-api-key": `bbot_kvx97s1gkkx02mmx3jm0tpunjg7rohb1joy6985usz`,
        }
      }
    );

    // Save the data attribute to sessionStorage if it's not null
    //if (response.data.conversationId) {
    //  sessionStorage.setItem('conversationId', response.data.conversationId);
    //}

    return markdown.render(response.data.output);

  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      return "I'm sorry, but I cannot answer that.";
    }
  }
}