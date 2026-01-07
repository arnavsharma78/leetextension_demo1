const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const server = dotenv.config({ path: "./config.env" });
const {
  handleLeetcodesubmission,
} = require("./controllers/leetcodeController");
const DB = process.env.DB;

// mongoose
//   .connect(DB) // DB = your MongoDB URI string
//   .then((con) => {
//     console.log("Connected to MongoDB:");
//     console.log(`Host: ${con.connection.host}`);
//     console.log("DB connection successful!");
//   })
//   .catch((err) => {
//     console.error("DB connection error:", err.message);
//   });
const app = express();
//app.use(cors());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Simple POST route to receive submissions
app.get("/", (req, res) => {
  res.send("hello from the server..");
});
app.post("/submissions", (req, res) => {
  const data = req.body; // this is what extension will send, it is object
  console.log("📩 Received data from extension:", data);

  console.log(typeof data);
  handleLeetcodesubmission(data);
  // TODO: Save to DB like MongoDB later
  res.json({ message: "Data received and saved successfully!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
