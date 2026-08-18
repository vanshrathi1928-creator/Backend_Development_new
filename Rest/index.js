const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } =require("uuid");
const methodOverride = require("method-override");

uuidv4(); // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apanacollege",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "Vansh Rathi",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "Vansh",
        content: "I love coding!"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts",(req,res) => {
    let {username, content } = req.body;
    let id = uuidv4();
    posts.push({ username, content });
    res.send("post request working");
});

app.get("/posts/:id",(req,res) => {
    let { id }= req.params;
    let post = posts.find((p) => id === p.id); 
    res.render("show.ejs");
});

app.patch("/post/:id",(req,res) => {
     let { id }= req.params;
     let newContent = req.params;
     let post = posts.find((p) => id === p.id); 
     post.content = newContent;
     console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req, res) => {
    let { id }= req.params;
    let post = posts.find((p) => id === p.id); 
    res.render("edit.ejs",{ post });
});

app.delete("/posts/:id", (req, res) => {
    let { id }= req.params;
    posts = posts.filter((p) => id !== p.id); 
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("App is listening on port 8080");
});