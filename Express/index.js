const express = require('express');
const app = express();
console.dir(app);

let port = 8080;
app.listen(port, () =>{
    console.log(`aap is listening on port ${port}`);
});

app.use((req, res) => {
    console.log(req);
    console.log("request received");
    res.send("this is a basic responce");
})