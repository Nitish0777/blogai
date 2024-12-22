const OpenAI = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const generateSummary = async (content) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "Generate a brief summary of the following blog post content:"
      }, {
        role: "user",
        content: content
      }],
      max_tokens: 150
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Summary generation failed';
  }
};

module.exports = { generateSummary };
