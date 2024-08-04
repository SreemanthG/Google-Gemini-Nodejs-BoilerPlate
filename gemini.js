import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
 
const gemini_api_key = process.env.GEMINI_API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);


export const generateProModel = () => {
  const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
  };

  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-pro",
    config: geminiConfig,
  });
   
  return geminiModel;
}

export const generateVisionModel = () => {
  const geminiConfig = {
    temperature: 0.4,
    topP: 1,
    topK: 32,
    maxOutputTokens: 4096,
  };

  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-pro-vision",
    config: geminiConfig,
  });
   
  return geminiModel;
}

// Example
// const generatePro = async () => {
//   try {
//     const prompt = "Tell me about google.";
    
//     geminiModel = generateProModel()
//     const result = await geminiProModel.generateContent(prompt);
//     const response = result.response;
//     console.log(response.text());
//   } catch (error) {
//     console.log("response error", error);
//   }
// };

// Example
// const generateVisionExample = async () => {
//   try {
//     // Read image file
//     const filePath = "some-image.jpeg";
//     const imageFile = await fs.readFile(filePath);
//     const imageBase64 = imageFile.toString("base64");
 
//     const promptConfig = [
//       { text: "Can you tell me about this image whats happening there?" },
//       {
//         inlineData: {
//           mimeType: "image/jpeg",
//           data: imageBase64,
//         },
//       },
//     ];
 
//     const result = await geminiModel.generateContent({
//       contents: [{ role: "user", parts: promptConfig }],
//     });
//     const response = await result.response;
//     console.log(response.text());
//   } catch (error) {
//     console.log(" response error", error);
//   }
// };
 