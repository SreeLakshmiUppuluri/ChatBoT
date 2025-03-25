// components/Model.jsx
const { GoogleGenerativeAI } = require("@google/generative-ai");


const apiKey = "AIzaSyBTjNc04jvc4SQwoiMWiXbgeZ9OQI_VWK0"; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt) => {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text;
};
