const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.post("/quotes", (req, res) => {
  res.send("sent");
  console.log("Hellooooooooooooooooo!");
});
console.log("Here");
