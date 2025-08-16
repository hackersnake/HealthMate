import app from './app.js';

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Server is Running");
})


// start server
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})