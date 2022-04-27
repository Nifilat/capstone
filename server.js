// Static server file

const http = require("http");
var fs = require("fs");

const port = 4000;
const host = "127.0.0.1";

// the server request
const server = http.createServer((req, res) => {
  const urlPath = req.url;

  // route request goes in here

  if (urlPath === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("pages/index.html").pipe(res);
  } else if (urlPath === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("pages/about.html").pipe(res);
  } else if (urlPath === "/sys") {
    res.statusCode = 201;
    res.setHeader("Content-Type", "text/plain");
    res.end("Your OS info has been saved successfully!");

    const os = require("os");
    let osinfo = {
      osHostName: os.hostname(),
      osPlatform: os.platform(),
      architecture: os.arch(),
      numberofCPUS: os.cpus(),
      osNetworkInterfaces: os.networkInterfaces(),
      osUptime: os.uptime(),
    };

    let data = JSON.stringify(osinfo, null, 2);
    fs.writeFileSync("osinfo.json", data);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("pages/404.html").pipe(res);
  }
});

// the port
server.listen(port, host, () => {
  console.log(`server running on ${host}:${port}`);
});
