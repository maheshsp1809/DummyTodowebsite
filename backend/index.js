const express = require("express");

const app = express();

app.get("/todos", (req, res) => {
  res.json([
    {
      id: 1,
      text: "Todo 1",
    },
  ]);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
