// 🎯 Objective:
// Handle form submissions manually using querystring.
// ✅ Tasks:
// 1.	In views/login.html, create a form with method POST:
// o	Fields: Email and Password
// 2.	On POST /admin/login, parse the data using querystring.
// 3.	If email is admin@mail.com and password is admin123, redirect to /admin/dashboard.
// 4.	Else, show a custom error page.
// 🧠 Learning Outcomes:
// •	Manual POST request parsing
// •	Conditional routing and redirects
// •	Serving HTML files with res.sendFile

import express from 'express';
import fs from 'fs';
import path  from 'path';
import {parse} from 'querystring';
import url from 'url';

const app = express();
const PORT = 3000;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Serve the login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Manual parsing of POST request body
app.post("/admin/login", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString(); 
  });

  req.on("end", () => {
    const {email, password} = parse(body);

    if (email === "admin@mail.com" && password === "admin123") {
      res.redirect("/admin/dashboard");
    } else {
      res.sendFile(path.join(__dirname, "views", "error.html"));
    }
  });
});

app.get("/admin/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
