// src/ai.js
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has 
and suggests a recipe they could make with some or all of those 
ingredients. You don't need to use every ingredient they mention. 
The recipe can include additional items but keep them to a minimum. 
Format your response in Markdown.
`;

function getGeminiKey() {
    const key = process.env.REACT_APP_GEMINI_API_KEY;
    if (!key) {
        throw new Error(
            "Missing GEMINI API key: make sure you have REACT_APP_GEMINI_API_KEY in your .env* and restarted the dev server"
        );
    }
    return key;
}

function createGeminiClient() {
    // now that we’ve verified our key, pass it straight into the constructor
    return new GoogleGenAI({ apiKey: getGeminiKey() });
}

export async function getRecipeFromGemini(ingredientsArr) {
    const gemini = createGeminiClient();
    const ingredientsString = ingredientsArr.join(", ");
    const prompt = `${SYSTEM_PROMPT}
User: I have ${ingredientsString}. Please give me a recipe!`;

    const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
}
