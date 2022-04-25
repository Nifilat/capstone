// Static server file

const http = require("http");
var fs = require("fs");

const port = 4000;
const host = "127.0.0.1";

// the server request
const server = http.createServer((req, res) => {
  const urlPath = req.url;
  console.log(urlPath);
  // route request goes in here

  if (urlPath === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
    res.end();
  } else if (urlPath === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./about.html").pipe(res);
    res.end();
  } else if (urlPath === "/sys") {
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end("Your OS info has been saved successfully!");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(__dirname + "/404.html").pipe(res);
    res.end();
  }
});

// the port
server.listen(port, host, () => {
  console.log(`server running on ${host}:${port}`);
});
