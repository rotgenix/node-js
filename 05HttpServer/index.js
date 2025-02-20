const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    console.log("New request Received");
    console.log(req.url)
    if (req.url === "/favicon.ico'") { return res.end(); }

    // const myUrl = url.parse(req.url);
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received \n`;
    fs.appendFile("./log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if (req.method === "GET") {
                    res.end("HomePage");
                }
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi ${username}`);
                break;
            case "/signup":
                if (req.method === "GET") {
                    res.end("THis is a sign up form");
                } else if (req.method === "POST") {
                    res.end("Success");
                }
                // res.end(`Hi ${username}`);
                break;
            default: res.end("404 Not Found!");
                break;
        }
    });
});

myServer.listen(8000, () => {
    console.log("Server Started");
});