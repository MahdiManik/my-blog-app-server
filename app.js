const express = require("express");
const cors = require("cors");
const router = require("./routes/posts");

const app = express();
const port = process.env.PORT || 5000;

// parser
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

// this is just for checking
router.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
