import express from "express";

const app = express();
const port = 3000;

// Custom Middleware
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Reqeust URL: ", req.url);
  next();

  /*  next()의 역할?
  ---
  미들웨어 A
  logger 미들웨어
  미들웨어 B
  ---

  - HTTP 요청이 들어오면, logger 미들웨어는 요청 메서드와 URL을 로깅한 다음 next()를 호출하여 제어를 미들웨어 B로 전달한다. 
  - 미들웨어 B에서 추가적인 처리가 이루어질 것이다. 
  - 만약 next()를 호출하지 않으면 요청 처리가 여기서 중단되며, 다음 미들웨어나 라우팅 핸들러는 실행되지 않는다.
  */
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
