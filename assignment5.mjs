// Handling POST Requests with Body Data Objective: Accept and respond to data submitted via POST. Instructions:
// - Use express.urlencoded() middleware to parse form data.
// - Create a POST route /submit.
// - Send a form from the frontend with name and email fields.
// - On submission, respond with Hello [name], your email is [email]. Bonus: Create a basic HTML form (form.html) and serve it using res.sendFile().

import express from 'express';
import path from 'path';
import dotenv from "dotenv";
import url from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html")); // form.html is in same directory
});

// POST route to handle submitted form data
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.send(`Hello ${name}, your email is ${email}.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});