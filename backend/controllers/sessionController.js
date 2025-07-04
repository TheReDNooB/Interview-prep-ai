const Session = require("../models/Session");
const Question = require("../models/Question");

// @desc    create a new session and linked questions
// @route   POST /api/sessions/create
// @access  Private
exports.createSession = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, description, questions } = req.body;
    const userId = req.user._id;

    const session = await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
    });

    const questionsDocs = await Promise.all(
      questions.map( async (q) => {
        const question = await Question.create({
          session: session._id,
          question: q.question,
          answer: q.answer,
        });
        return question._id;
      })
    );

    session.questions = questionsDocs;
    await session.save();

    res.status(201).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" })
  }
};

// @desc    get all session for the logged-in user
// @route   GET /api/sessions/my-sessions
// @access  Private
exports.getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.userId }).sort({ createdAt: -1 }).populate("questions");
    res.status(200).json({ success: true, sessions});
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" })
  }
};

// @desc    get a session by id with populated questions
// @route   GET /api/sessions/:id
// @access  Private
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id).populate({path:"questions", options: { sort: { isPinned: -1, createdAt: 1 } },}).exec();
    if (!session) {
      return res.status(404).json({ success: false, message: "Session not found" });
    }
    res.status(200).json({ success: true, sessions});
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" })
  }
};

// @desc    delete a session and its questions
// @route   DELETE /api/sessions/:id
// @access  Private
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ success: false, messsage: "Session not found" });
    }

    // check if the session belong to the logged-in user
    if (session.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ success: false, message: "Not authorized  to delete this session" });
    }

    // delete all questions linked to the session
    await Question.deleteMany({ session: session._id });

    // delete the session
    await session.deleteOne();

    return res.status(200).json({ success: true, message: "Session deleted successfully" })
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" })
  }
};