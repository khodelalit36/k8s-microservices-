
const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

const users = [
  { id: 1, name: "Lalit" },
  { id: 2, name: "Student" }
];

app.get("/", (req, res) => {
  res.send("User Service is running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`User Service running on port ${PORT}`);
});
