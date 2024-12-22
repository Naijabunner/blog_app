import axios from "axios";
import {API_KEY} from "@env"
  // Replace with your OpenAI API Key
//   const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "your-default-api-key";

 export interface Message {
        sender: "user" | "assistant";
        text: string;
    }

  export const chatWithAssistant = async (newMessages: Message[]) => {
   console.log('newMessages')
   console.log(API_KEY)
     const response = await axios.post(
       "https://api.openai.com/v1/chat/completions",
       {
         model: "gpt-3.5-turbo",
         messages: [
           { role: "system", content: "You are a chatty friend." },
           ...newMessages.map((msg) => ({
             role: msg.sender === "user" ? "user" : "assistant",
             content: msg.text,
           })),
         ],
         max_tokens: 5,
       },
       {
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${API_KEY}`,
         },
       }
     );

     console.log(response)
     return response.data.choices[0].message.content;
  };

