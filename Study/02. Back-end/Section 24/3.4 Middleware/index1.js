import express from "express";
import bodyParser from "body-parser";

// 파일 경로 설정
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// 현재 모듈의 디렉토리 경로를 '동적'으로 결정해야 할 때 유용하다.
// 예를 들어, 파일을 읽거나 쓸 때, 상대 경로로 다른 파일에 접근할 때, 특정 디렉토리 내에서 파일을 검색할 때 사용될 수 있다.

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));    // 미들웨어 마운트

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html")    // index.html 절대 경로 출력
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
