const express = require("express");
const router = express.Router();
const {
  createIssue,
  getAllIssue,
  addCommentIntoIssue,
  getCommentsBasedOnIssue,
} = require("../controller/issueController");
router.post("/", createIssue);
router.get("/:id", getAllIssue);
router.get("/comment/:id", getCommentsBasedOnIssue);
router.post("/addComment", addCommentIntoIssue);

module.exports = router;
