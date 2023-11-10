import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    // const today = new Date("Nov 11, 2023 11:11:11");   // 토요일
    const day = today.getDay();   // 0(일요일) ~ 6(토요일)

    let type = "a weekday";
    let advice = "it's time to work hard";

    if (day === 0 || day === 6) {    // 토요일 or 일요일
        type = "the weekend";
        advice = "it's time to have some fun";
    }

    // ejs 파일에 표시하기
    res.render("index.ejs", {
        dayType: type,
        advice: advice,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
