
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: "Learn Docker", completed: false },
  { id: 2, title: "Learn Kubernetes", completed: false }
];

app.get("/", (req, res) => {
  res.send("Task Service is running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Task title is required" });
  }

  const task = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Task Service running on port ${PORT}`);
});
