const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
    return res.send("Hello from About Page" + " hey " + req.query.name);
});

// USING HTTP
// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server running"));

// USING EXPRESS APP 
app.listen(8000, () => {
    console.log("Server is running");
});