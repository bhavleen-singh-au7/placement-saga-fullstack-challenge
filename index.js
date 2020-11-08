const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hit POST request from POSTMAN.");
});

app.post("/", async (req, res) => {
  try {
    const { script, language, versionIndex } = req.body;

    const endPoint = "https://api.jdoodle.com/v1/execute";

    const reqBody = {
      script,
      language,
      versionIndex,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    };

    const data = await axios.post(endPoint, {
      json: reqBody,
    });

    console.log("output => ", data);
    res.status(200).json({
      output: data,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on Port No.", PORT);
});
