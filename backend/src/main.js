import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Dummy login route
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "password") {
    res.json({ message: "Login successful", token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/", (req, res) => {
  res.send("School Management Backend Running!");
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
