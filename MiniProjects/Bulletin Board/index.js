import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 글들을 저장하기 위한 변수
let posts = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// Contact 처리
app.post("/submit", (req, res) => {
    const name = req.body["name"];
    const email = req.body["email"];
    const content = req.body["text"];

    console.log(`Name: ${name}, Email: ${email}, Comment: ${content}`);

    res.render("contact.ejs", {
        result: "Your message has been sent to starrykss sucessfully!"
    });

    // 구현하기 : 이메일 
});

app.get("/post", (req, res) => {
    res.render("post.ejs", {
        postList: posts
    });
});

app.get("/write", (req, res) => {
    res.render("write.ejs");
})

app.post("/write", (req, res) => {
    const title = req.body["title"];
    const content = req.body["content"];
    const newPost = { title, content };

    posts.push(newPost);

    res.render("post.ejs", {
        postList: posts
    });

    res.redirect("/post");
});

app.get("/edit/:id", (req, res) => {
    const postId = req.params.id;
    const post = posts[postId];

    res.render("edit.ejs", {
        post: post,
        postId: postId
    });
});

app.post("/edit/:id", (req, res) => {
    const postId = req.params.id;
    const title = req.body["title"];
    const content = req.body["content"];

    posts[postId].title = title;
    posts[postId].content = content;

    res.redirect("/post");
});

app.get("/delete/:id", (req, res) => {
    const postId = req.params.id;
    posts.splice(postId, 1);    // postId 인덱스에 있는 요소를 1개 제거한다.
    res.redirect("/post");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});