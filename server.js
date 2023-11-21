const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const app = express();
const dbConnect = require("./config/dbConnect");
const errHandler = require("./middleware/errHandler");

dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./routes/userRoute"));
app.use("/issue", require("./routes/issueRoute"));
app.use(errHandler);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`server error`, err);
  }
  console.log(`server started on port ${PORT}`);
});
