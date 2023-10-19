const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { prompt } = req.body;

    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    try {
    const promptProp = `Please answer the following question based on the themes of the painting “The Boating Party” by “Mary Cassatt”. 
    Your answers should be in first person, as though it’s the painting itself that is answering. Don’t include any mention of the artwork 
    title, the artists name, or describe anything about the painting itself. Simply use the painting as the inspiration for your answers.
    Question: ${prompt}`;

    // const roleContent = genericCritic;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      max_tokens: 200,
      messages: [
        { role: "system", content: 'You are a helpful assistant.' },
        { role: "user", content: promptProp },
      ],
    });

    const generatedResponse = response.data.choices[0].message.content;

    console.log(generatedResponse);

    res.status(200).json(generatedResponse);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
