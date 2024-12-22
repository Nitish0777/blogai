const axios = require('axios');

const generateSummary = async (content) => {
  try {
    console.log('Generating summary for:', content);
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GENERATIVE_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: content }],
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Summary generated:', response.data);
    
    // Ensure the summary text is extracted correctly
    const summary = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return summary || 'No summary generated';
  } catch (error) {
    console.error('Error generating summary:', error.response?.data || error.message);
    return 'Summary generation failed';
  }
};

module.exports = { generateSummary };
