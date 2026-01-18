const Feedback = require("../models/feedback.model");

/**
 * @desc    Add feedback
 * @route   POST /api/v1/feedback
 */
exports.addFeedback = async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({
        message: "Name and message are required"
      });
    }

    const feedback = await Feedback.create({
      name,
      message
    });

    res.status(201).json({
      message: "Feedback submitted successfully",
      data: feedback
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get all feedbacks
 * @route   GET /api/v1/feedback
 */
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Delete feedback
 * @route   DELETE /api/v1/feedback/:id
 */
exports.deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback.findByIdAndDelete(id);

    if (!feedback) {
      return res.status(404).json({
        message: "Feedback not found"
      });
    }

    res.status(200).json({
      message: "Feedback deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
