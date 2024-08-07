import axios from "axios";
import MarkdownIt from "markdown-it";

export async function sendPrompt(message: string) {
  try {
    // Retrieve the data attribute from sessionStorage
    const conversationId = sessionStorage.getItem('conversationId');
    const markdown = new MarkdownIt();
    const expertId = import.meta.env.VITE_EXPERT_ID;
    const modelId = import.meta.env.VITE_MODEL_ID;
    const abilityId = import.meta.env.VITE_ABILITY_ID;
    const apiKey = import.meta.env.VITE_API_KEY;

    // Prepare the payload for the POST request
    const payload = {
      "expert_id": expertId,
      "ability_id": abilityId,
      "model_id": modelId ,
      "session_id": "6" ,
      "user_id": "123",
      "input_data": message,
      "document_urls": [],
      "conversation_history": [],
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
      "https://api.b-bot.space/api/v1/invoke_agent",
      payload,
      {
        headers: {
          "bbot-api-key": apiKey,
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