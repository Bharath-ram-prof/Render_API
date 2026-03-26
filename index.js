const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "API is working successfully on Render" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", server: "Render Live" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

