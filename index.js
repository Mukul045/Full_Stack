const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define a route to render an EJS template
app.get("/", (req, res) => {
    res.render("index");
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
