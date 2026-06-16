import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;

function getAI() {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY || 'mock_key'
    });
  }
  return aiClient;
}

export async function askGemini(prompt: string) {
  try {
    const response = await getAI().models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error('Error with Gemini:', error);
    throw error;
  }
}
