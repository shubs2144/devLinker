const express = require("express");

const app = express();

app.get("/user" , (req, res) => {
    res.send("Handling GET API handler");
});

app.post("/user" , (req, res) => {
    res.send("Handling POST API handler");
});

app.delete("/user" , (req, res) => {
    res.send("Handling DELETE API handler");
});

app.put("/user" , (req, res) => {
    res.send("Handling PUT API handler");
});

app.patch("/user" , (req, res) => {
    res.send("Handling PATCH API handler");
});

app.use("/test", (req, res) => {
    res.send("Handling response on dashbord");
});

// app.use("/about" , (req, res) => {
//     res.send("Shubham patil");
// });

// app.use("/contact" , (req, res) => {
//     res.send("8861422199");
// });

app.listen(7777, () => {
    console.log("Hey your server is listening on 7777...");
});