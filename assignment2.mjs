// Objective: Learn to handle route parameters and query strings.
// Instructions:
// 1.	Create a route /user/:name that displays "Hello, [name]!".
// 2.	Create a route /search that takes a query param q and responds with "You searched for: [q]".
// Example:
// •	GET /user/Harish → Hello, Harish!
// •	GET /search?q=express → You searched for:express


import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//Route for /user/:name
app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    res
      .status(200)
      .send(name ? `<h1 style="color:lightGreen">Hello, ${name}!</h1>`
          : `<h1 style="color:darkRed">Name not available.</h1>`);
});

// Route for /search?q=....(query)
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.status(200).send(q ? `You searched for: ${q}` : 'No search query provided.');
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));