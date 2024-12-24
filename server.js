const express = require("express");
const cors = require("cors"); // Import cors module
const userRoutes = require("./routes/userRoutes");
const app = express();

const PORT = process.env.PORT || 4000;

// Use CORS middleware to allow cross-origin requests
app.use(cors()); // This will allow all domains

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
