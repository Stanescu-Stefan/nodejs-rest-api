const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  console.log("Received request");
});

app.listen(3000, () => {
  console.log("I am ready to listen to you");
});
