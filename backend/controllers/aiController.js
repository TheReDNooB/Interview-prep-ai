const { GoogleGenAI } = require("@google/genai");
const { conceptExplainPrompt } = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// @desc    generate interview questions and answers using gemini
// @route  POST /api/ai/generate-questions
// @access  private
const generateInterviewQuestions = async (req, res) => {
  try {
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