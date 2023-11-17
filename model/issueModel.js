const mongoose = require("mongoose");
const issueSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Issue title is required"],
    },
    content: {
      type: String,
      required: [true, "issue content is required"],
    },
    userId: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "User",
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Issue", issueSchema);
