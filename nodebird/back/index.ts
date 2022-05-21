import * as express from "express";

const app = express();
const prod = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.PORT : 3065);
app.get("/", (req, res) => {
  res.send("react nodebird 백엔드 정상 동작!");
});

app.listen(app.get("port"), () => {
  console.log(`server is running on ${app.get("port")}`);
}); //배포용은 port를 자유자재로 바꿀 수 있고 개발용은 port3065번이다.
