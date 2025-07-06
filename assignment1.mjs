import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:darkGreen">Welcome to the Home Page.</h1>`);
});

app.get('/about', (req, res) => {
    res.status(200).send(`<h1 style="color:darkRed">About Us Page</h1>`);
});

app.get('/contact', (req, res) => {
    res.status(200).send(`<h1 style="color:#CCCC00">Contact Page</h1>`);
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));


