const mongoose = require("mongoose");
const commentSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Issue comment is required"],
    },
    issueId: {
      type: String,
      required: [true, "issue Id is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Comment", commentSchema);
