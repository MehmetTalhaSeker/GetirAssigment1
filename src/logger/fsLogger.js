const fs = require("fs");

const appendLog = (req, res) => {
  fs.appendFile(
    "./log.txt",
    `A request received, StatusCode => ${res.statusCode}, ReqUrl => ${req.url} \n`,
    (err) => {
      if (err) console.log(err);
    }
  );
};

module.exports = appendLog;
