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


import express from "express";
import dotenv from "dotenv";
import { parse } from "querystring";
import { join } from "path";
import url from "url";

// sending static file to server via get api
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
// console.log(join(__dirname,"class"))

app.use("/assets", express.static(join(__dirname, "class")));

app.get("/", (req, res) => {
  res.status(200).send("<h1>HomePage(Get Api)</h1>");
});

app
  .get("/admin/login", (req, res) => {
    res.sendFile(join(__dirname, "views", "login.html"));
  })
  .post("/admin/login", (req, res) => {
    let body = "";
    req.on("data", (data) => (body += data));
    req.on("end", () => {
      const { email, password } = parse(body);
      // res.send(`<h1 style="color:darkRed">Email: ${email}<br> Password: ${password}<br></h1>`)
      res.redirect("/admin/dashboard");
    });
  });

app.get("/admin/dashboard", (req, res) => {
  res.sendFile(join(__dirname, "views", "dashboard.html"));
});

app.listen(PORT, () => console.log(`Server started at http://localhost:3000`));
