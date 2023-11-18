import axios from "axios";

export async function sendPrompt(message: string) {
  try {
    const response = await axios.post(
      "/api/expert/askInternAgent",
      { prompt: message },
      {
        headers: {
          Authorization: `Bearer TNHKogj28VRErNVdRr2ArEnZBrNFKnZ6`,
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