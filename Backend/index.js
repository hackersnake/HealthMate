const app = require('./app')

const PORT = process.env.PORT || 8000;



// start server
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})