const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, passward } = req.query;
    res.send(`standerd GET response. Welcome ${user}!`);
});

app.get("/register", (req, res) => {
    res.send("standerd GET response");
});

app.post("/register", (req, res) => {
    res.send("standerd POST response");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});