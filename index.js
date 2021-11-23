const app = require("http");
const fs = require("fs");

const createServer = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}/`);

  switch (url.pathname) {
    case "/":
      res.writeHead(200);
      res.write("You are on 'Home' Page");
      fs.appendFile(
        "log.txt",
        `A request received, StatusCode => ${res.statusCode}, ReqUrl => ${req.url} \n`,
        (err) => {
          if (err) console.log(err);
        }
      );
      res.end();
      break;
    case "/about-us":
      res.writeHead(200);
      res.write("You are on 'About Us' Page");
      fs.appendFile(
        "log.txt",
        `A request received, StatusCode => ${res.statusCode}, ReqUrl => ${req.url} \n`,
        (err) => {
          if (err) console.log(err);
        }
      );
      res.end();
      break;
    case "/getir":
      res.writeHead(200);
      res.write("You are on 'Best bootcamp in the world' Page");
      fs.appendFile(
        "log.txt",
        `A request received, StatusCode => ${res.statusCode}, ReqUrl => ${req.url} \n`,
        (err) => {
          if (err) console.log(err);
        }
      );
      res.end();
      break;
    default:
      res.writeHead(404);
      res.write("You are on 'Page Not Found' Page ");
      fs.appendFile(
        "log.txt",
        `A request received, StatusCode => ${res.statusCode}, ReqUrl => ${req.url} \n`,
        (err) => {
          if (err) console.log(err);
        }
      );
      res.end();
      break;
  }
};
app.createServer(createServer).listen(8080);
