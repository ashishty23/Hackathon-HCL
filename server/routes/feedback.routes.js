const express = require("express");
const router = express.Router();
const {
  addFeedback,
  getAllFeedbacks,
  deleteFeedback
} = require("../controllers/feedback.controller");

router.post("/", addFeedback);
router.get("/", getAllFeedbacks);
router.delete("/:id", deleteFeedback);

module.exports = router;
