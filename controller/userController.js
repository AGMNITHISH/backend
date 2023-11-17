const asyncHandler = require("express-async-handler");
const userModel = require("../model/userModel");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(404);
      throw new Error("required fileds missing for register");
    }
    const checkExistingUser = await userModel.findOne({ email });
    if (checkExistingUser) {
      res.status(404);
      throw new Error("Exisiting User");
    }
    const createNewUser = await userModel.create({ name, email, password });
    if (!createNewUser) {
      res.status(404);
      throw new Error("user registration got failed!!!");
    }
    res.status(200).json({
      msg: createNewUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("required fileds missing for register");
    }

    const checkExistingUser = await userModel.findOne({ email });
    if (!checkExistingUser) {
      throw new Error("user not found");
    }
    const vaildUser = await userModel.findOne({ email, password });
    if (!vaildUser) {
      throw new Error("invalid credentials");
    }
    res.status(200).json({
      msg: vaildUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { registerUser, loginUser };
