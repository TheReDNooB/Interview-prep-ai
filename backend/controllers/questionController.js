const Question = require("../models/Question");
const Session = require("../models/Session");

// @desc    add aditional questions to an existing session
// @route   POST /api/questions/add
// @access  private
exports.addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (!sessionId || !questions || !Array.isArray(questions)){
      return res.status(400).json({ message: "Invalid input data" });
    }

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // create new quesions
    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
      }))
    );

    // update session with new questions
    session.questions.push(...createdQuestions.map(q => q._id));
    await session.save();

    res.status(201).json({ message: "Questions created succesfully", questions: createdQuestions });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    pin or unpin a question
// @route   POST /api/questions/:id/pin
// @access  private
exports.togglePinQuestions = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    update question note
// @route   POST /api/questions/:id/note
// @access  private
exports.updateQuestionNote = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};