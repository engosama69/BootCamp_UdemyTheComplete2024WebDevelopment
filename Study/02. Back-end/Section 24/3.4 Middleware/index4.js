import express from "express";
import bodyParser from "body-parser";

// 파일 경로 설정
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

// Custom Middleware
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);    // 커스텀 미들웨어 마운트

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is: </h1><h2>${bandName}🥁</h2>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});