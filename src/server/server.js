const express = require("express");
const cors = require("cors"); // Import CORS middleware
const app = express();

app.use(express.json());

// Enable CORS for all routes and origins
app.use(cors({ origin: "http://localhost:4200" }));

const users = [
  {
    username: "user1",
    birthdate: "1990-01-01",
    age: 34,
    email: "user1@example.com",
    password: "pass1",
    valid: false,
  },
  {
    username: "user2",
    birthdate: "1995-05-12",
    age: 29,
    email: "user2@example.com",
    password: "pass2",
    valid: false,
  },
  {
    username: "user3",
    birthdate: "2000-10-10",
    age: 24,
    email: "user3@example.com",
    password: "pass3",
    valid: false,
  },
];

app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.email === username && u.password === password
  );
  if (user) {
    res.json({ ...user, password: undefined });
  } else {
    console.log("error");
    res.status(401).json({ valid: true });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
