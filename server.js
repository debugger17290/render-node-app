// server.js
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
