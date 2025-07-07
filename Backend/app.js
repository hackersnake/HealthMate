const express = require('express');
const app = express();
require('dotenv').config();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("Server is Running");
})



module.exports = app;