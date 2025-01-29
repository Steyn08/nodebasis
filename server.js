const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log("request made");

  // res.setHeader("content-type", "text/html");
  // res.write("<p>hello, kishore </p>");
  // res.write("<p>hello, again kishore </p>");
  // res.end();

  let path = "./views/";

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "index.html";
      break;
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "about");
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request");
});
