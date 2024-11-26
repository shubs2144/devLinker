const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Handling response on dashbord");
});

app.use("/about" , (req, res) => {
    res.send("Shubham patil");
});

app.use("/contact" , (req, res) => {
    res.send("8861422199");
});

app.listen(7777, () => {
    console.log("Hey your server is listening on 7777...");
});