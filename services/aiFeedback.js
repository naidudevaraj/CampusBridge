const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getCodeFeedback(code, language) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a senior code reviewer. Provide concise feedback for ${language} code on correctness, naming, readability, and performance.`
        },
        {
          role: "user",
          content: code
        }
      ]
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("AI Feedback error:", err.message);
    return "❌ Error generating AI feedback.";
  }
}

module.exports = { getCodeFeedback };
