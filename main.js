const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const cors = require('cors')

app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generate = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (err) {
        console.log(err);
        return "An error occurred while generating content.";
    }
};

app.post('/api/content', async (req, res) => {
    try {
        console.log("reached")
        const data = req.body.question;  // Access question from request body
        const result = await generate(data);
        console.log("result",result)
        res.json({ result });
    } catch (err) {
        res.json({ result: "error: " + err });
    }
});

app.listen(5500, () => {
    console.log("Server is up and running on port 5500");
});
