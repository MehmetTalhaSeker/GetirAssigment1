const app = require("http");
const logger = require("./logger/fsLogger");

const createServer = (req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.write("You are on 'Home' Page");
      logger(req, res);
      res.end();
      break;
    case "/about-us":
      res.writeHead(200);
      res.write("You are on 'About Us' Page");
      logger(req, res);
      res.end();
      break;
    case "/getir":
      res.writeHead(200);
      res.write("You are on 'Best bootcamp in the world' Page");
      logger(req, res);
      res.end();
      break;
    default:
      res.writeHead(404);
      res.write("You are on 'Page Not Found' Page ");
      logger(req, res);
      res.end();
      break;
  }
};
app.createServer(createServer).listen(8080);
