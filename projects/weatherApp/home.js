require('dotenv').config();
const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

  return temperature;
};

const apiKey = "b0a03a7f72d2f24a2dd99447df7c0234";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    requests(
      `http://api.openweathermap.org/data/2.5/weather?q=Kanpur&units=metric&appid=${apiKey}`
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) {
          console.log("connection closed due to errors", err);
        }
        res.end();
      });
  } else {
    res.end("File not found");
  }
});

const PORT = 8000;
const HOST = "127.0.0.1";

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});
