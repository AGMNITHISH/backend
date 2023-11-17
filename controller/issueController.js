const asyncHandler = require("express-async-handler");
const issueModel = require("../model/issueModel");
const commentModel = require("../model/commentModel");
const expressAsyncHandler = require("express-async-handler");

const createIssue = asyncHandler(async (req, res) => {
  try {
    const { content, title, userId } = req.body;
    if (!content || !title || !userId) {
      res.send(404);
      throw new Error("required fields missing to create a issue post");
    }
    const createIssuePost = await issueModel.create({
      content,
      title,
      userId,
    });
    if (!createIssuePost) {
      res.status(404);
      throw new Error("issue post is not created");
    }
    res.status(201).json({
      msg: createIssuePost,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const addCommentIntoIssue = asyncHandler(async (req, res) => {
  try {
    const { issueId, comment } = req.body;
    if (!issueId || !comment) {
      res.status(404);
      throw new Error(" required fields missing");
    }
    const result = await commentModel.create({ issueId, comment });
    res.status(200).json({ data: result });
  } catch (error) {
    throw new Error(error);
  }
});
const getAllIssue = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await issueModel.find({ userId: id }).select({
      __v: 0,
      updatedAt: 0,
      userId: 0,
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getCommentsBasedOnIssue = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await commentModel.find({ issueId: id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createIssue,
  getAllIssue,
  addCommentIntoIssue,
  getCommentsBasedOnIssue,
};
