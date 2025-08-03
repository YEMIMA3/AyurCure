import axios from 'axios'

// Make sure this environment variable is set in your .env file as: VITE_OPENAI_API_KEY=your_key_here
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

export async function getRemedySuggestion(symptom) {
  if (!API_KEY) {
    throw new Error("❌ API key is missing. Check your .env file.")
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Suggest an Ayurvedic remedy for: ${symptom}.
            Include plant, part used, preparation, dosage, and caution.`
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`, // ✅ fixed with backticks
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data.choices[0].message.content
  } catch (error) {
    console.error("❌ OpenAI API Error:", error.response?.data || error.message)
    throw new Error("Failed to fetch remedy suggestion. Check browser console.")
  }
}
