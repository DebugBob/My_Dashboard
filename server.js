import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const { hashSync, compareSync } = bcrypt;
const { sign } = jwt;

// Initialize Express app
const app = express();

const PORT =  5000;
const SECRET_KEY = "your-secret-key";
const TOKEN_EXPIRATION = "1h";

app.use(express.json());

// Dummy user database
const users = [
  {
    id: 1,
    email: "test@example.com",
    password: hashSync("password123", 10), 
  },
];

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log;(password);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: TOKEN_EXPIRATION,
  });

  res.json({ token });
});

// Default route for the homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Authentication API</h1><p>Use POST /api/login to authenticate.</p>");
});

// Handle 404 for unmatched routes
app.use((req, res) => {
  res.status(404).send("<h1>404 - Not Found</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
