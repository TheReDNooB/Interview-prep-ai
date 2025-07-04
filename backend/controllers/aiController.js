const { GoogleGenAI } = require("@google/genai");
const { conceptExplainPrompt, questionAnswerPrompt } = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// @desc    generate interview questions and answers using gemini
// @route  POST /api/ai/generate-questions
// @access  private
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if(!role || !experience, !topicsToFocus, !numberOfQuestions) {
      return res.status(400).json({ message: "Missing require fields" });
    }

    const prompt = questionAnswerPrompt(role, experience, topicsToFocus, numberOfQuestions);

    const reponse = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    let rawText = response.text;

    // clean it: remove ```` json and ```` from beginning and end
    const cleanedText = rawText
    .replace(/^```json\s*/, "") // remove starting ```json
    .replace(/```$/, "") // remove ending ````
    .trim(); // remove extra spaces

    // now safe to parse
    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate questions", error: error.message });
  }
};

// @desc    generate explains a interview question
// @route  POST /api/ai/generate-explanation
// @access  private
const generateConceptExplanations = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Failed to generate questions", error: error.message });
  }
};

module.exports = { generateInterviewQuestions, generateConceptExplanations };