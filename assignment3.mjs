// 🎯 Objective:
// Understand how to serve static assets and use environment variables.
// ✅ Tasks:
// 1.	Install dependencies: express, dotenv.
// 2.	Create a .env file and set PORT=3000.
// 3.	Create a public folder with a CSS file and a sample image.
// 4.	Link the CSS to login.html and display the image on the dashboard.
// 5.	Use express.static() to serve the public folder under /assets.
// 🧠 Learning Outcomes:
// •	Environment variable usage
// •	Static middleware configuration
// •	Basic project structure




import express from "express";
import dotenv from "dotenv";
import { join } from "path";
import url from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Serve static files from public 
app.use("/assets", express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).send("<h1>HomePage(Get Api)</h1>");
});

app.get('/admin/login', (req, res) => {
  res.sendFile(join(__dirname, "views", "login.html"));
});

app.get("/admin/dashboard", (req, res) => {
  res.sendFile(join(__dirname, "views", "dashboard.html"));
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));


