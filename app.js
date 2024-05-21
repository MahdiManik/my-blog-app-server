const express = require("express");
const router = require("./routes/posts");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1", router);

router.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
