import {generateProModel, generateVisionModel} from './gemini.js';
import { readFileSync } from 'fs'
// Example
const generatePro = async () => {
  try {
    const prompt = "Tell me about google.";
    const geminiProModel = generateProModel();
    const result = await geminiProModel.generateContent(prompt);
    const response = result.response;
    console.log(response.text());
  } catch (error) {
    console.log("response error", error);
  }
};

// Example
const generateVision = async () => {
  try {
    // Read image file
    const filePath = "./temp/some-image.jpeg";
    const imageFile = readFileSync(filePath);
    const imageBase64 = imageFile.toString("base64");
 
    const promptConfig = [
      { text: "Can you tell me about this image whats happening there?" },
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64,
        },
      },
    ];

    const geminiVisionModel = generateVisionModel();
 
    const result = await geminiVisionModel.generateContent({
      contents: [{ role: "user", parts: promptConfig }],
    });
    const response = await result.response;
    console.log(response.text());
  } catch (error) {
    console.log(" response error", error);
  }
};

// generatePro(); 
// or 
// generateVision();