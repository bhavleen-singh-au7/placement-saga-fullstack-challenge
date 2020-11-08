const express = require("express");
const request = require("request");
require("dotenv").config();

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hit POST request from POSTMAN.");
});

app.post("/", (req, res) => {
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

    request(
      {
        url: endPoint,
        method: "POST",
        json: reqBody,
      },
      (err, data) => {
        if(err){
          res.status(400).json({
            error: err.message,
          });
        }
        
        res.status(200).json({
          output: data.body,
        });
      }
    );

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
