import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  res.json({
    todos: [
      {
        id: 1,
        title: "Todo 1",
        description: "Description 1",
        completed: false,
      },
      {
        id: 2,
        title: "Todo 2",
        description: "Description 2",
        completed: false,
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
